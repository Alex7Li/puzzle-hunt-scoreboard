import distinctColors from 'distinct-colors'
import { ref, get } from '@firebase/database';
import { db } from './firebase'

function time_in_minutes(timestr) {
  if (!timestr) {
    return -1;
  }
  var hrs_mins = timestr.split(":");
  var hrs = parseInt(hrs_mins[0]);
  var mins = parseInt(hrs_mins[1]);
  return 60 * hrs + mins;
}
async function getTeams() {
  const dbRef = ref(db);
  const snapshot = await get(dbRef, 'teams');
  return snapshot.val()['teams']
}

async function getStats() {
  const teams = await getTeams()
  // https://mokole.com/palette.html
  let colors = distinctColors({count:Object.keys(teams).length})

  const scores = {}
  const last_egg_time = {}
  const team_eggs = {}
  let eggs_remaining = 0

  for (let t in teams) {
    if (t != "GMs") {
      scores[t] = 0;
      last_egg_time[t] = null;
      team_eggs[t] = 0;
    }
  }
  let ind = 0
  for (let [k, team] of Object.entries(teams)) {
    for (let [_, egg] of Object.entries(team.eggs)) {
      var finder = egg.finder
      var found_time = egg.found_time
      if (!finder) {
        eggs_remaining++;
        continue;
      }
      scores[finder]++;
      if (k != "GMs") {
        team_eggs[finder]++;
      }
      if (time_in_minutes(found_time) >
        time_in_minutes(last_egg_time[finder])) {
        last_egg_time[finder] = found_time;
      }
    }
    team['color'] = colors[ind]
    ind++;
  }

  const sorted_teams = Object.keys(teams).filter(function (value, index, arr) {
    return value != "GMs";
  });
  sorted_teams.sort(
    function (a, b) {
      if (scores[a] != scores[b]) {
        return scores[a] > scores[b] ? -1 : 1;
      }
      if (team_eggs[a] != team_eggs[b]) {
        return team_eggs[a] > team_eggs[b] ? -1 : 1;
      }
      var mins_a = time_in_minutes(last_egg_time[a]);
      var mins_b = time_in_minutes(last_egg_time[b]);
      if (mins_a != mins_b) {
        return mins_a < mins_b ? -1 : 1;
      }
      return a < b ? -1 : 1;
    }
  );
  return [scores, eggs_remaining, last_egg_time, sorted_teams, team_eggs, teams]
}

export {getStats}
