import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { teams } from './teams.js'

function time_in_minutes(timestr) {
  if (timestr == null) {
    return -1;
  }
  var hrs_mins = timestr.split(":");
  var hrs = parseInt(hrs_mins[0]);
  var mins = parseInt(hrs_mins[1]);
  return 60 * hrs + mins;
}

// https://mokole.com/palette.html
let colors = [
  "#191970",
  "#ff0000",
  "#ffd700",
  "#006400",
  "#ff0000",
  "#ffd700",
  "#00ff00",
  "#00ffff",
  "#ff00ff",
  "#ffb6c1"
]

let scores = {}
let last_egg_time = {}
let team_eggs = {}
let eggs_remaining = 0

for (var t in teams) {
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
    if (finder == null) {
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
    var mins_a = time_in_minutes(last_egg_time[a]);
    var mins_b = time_in_minutes(last_egg_time[b]);
    if (mins_a != mins_b) {
      return mins_a < mins_b ? -1 : 1;
    }
    return a < b ? -1 : 1;
  }
);

function color_name(letter) {
  var node = document.createElement("p");
  var r = 14
  node.innerHTML = '<svg width="' + r + '" height="14"><rect width="14" height="14" style="fill:' + teams[letter].color + ';stroke-width:3;stroke:rgb(0,0,0)" /></svg> ' + teams[letter].name;
  return node;
}

export {scores, eggs_remaining, sorted_teams}