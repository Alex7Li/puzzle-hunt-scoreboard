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
  console.warn("YOU DO NOT NEED THE CONSOLE FOR ANY CLUE. PLEASE DO NOT HACK THIS SITE.")
  const dbRef = ref(db);
  const snapshot = await get(dbRef, 'teams');
  return snapshot.val()['teams']
}

async function getStats() {
  const teams = await getTeams()
  // https://mokole.com/palette.html
  const colors = distinctColors({ count: Object.keys(teams).length })

  const scores = {}
  const last_egg_time = {}
  const solved = {}
  let points_remaining = 0

  for (let t in teams) {
    if (t != "GMs") {
      scores[t] = 0;
      solved[t] = 0;
      last_egg_time[t] = null;
    }
  }
  let ind = 0
  for (let [k, team] of Object.entries(teams)) {
    team['color'] = colors[ind++];
    for (let [_, egg] of Object.entries(team.eggs)) {
      if(egg.point_values == undefined) {
        if (k == 'GMs') {
          egg.point_values = [5, 3, 1]
        } else {
          egg.point_values = [6, 4, 2]
        }
      }
      for (let i of [0, 1, 2]) {
        const finder = egg.finders[i]
        const found_time = egg.find_times[i]
        const point_value = egg.point_values[i];

        if (!finder) {
          points_remaining += point_value;
          continue;
        }
        if(scores[finder] == undefined) {
          console.error("Could not find " + finder + " in the list of teams")
          continue
        }
        scores[finder]+= point_value;
        solved[finder]++;
        if (time_in_minutes(found_time) >
          time_in_minutes(last_egg_time[finder])) {
          last_egg_time[finder] = found_time;
        }
      }
    }
  }

  const sorted_teams = Object.keys(teams).filter(function (value, index, arr) {
    return value != "GMs";
  });
  sorted_teams.sort(
    function (a, b) {
      if (scores[a] != scores[b]) {
        return scores[a] > scores[b] ? -1 : 1;
      }
      if (solved[a] != solved[b]) {
        return solved[a] > solved[b] ? -1 : 1;
      }
      const mins_a = time_in_minutes(last_egg_time[a]);
      const mins_b = time_in_minutes(last_egg_time[b]);
      if (mins_a != mins_b) {
        return mins_a < mins_b ? -1 : 1;
      }
      return a < b ? -1 : 1;
    }
  );
  return [scores, points_remaining, last_egg_time, sorted_teams, solved, teams]
}

export { getStats }
