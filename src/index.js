import { getStats } from './processing'
import { ref, get } from '@firebase/database';
import { db } from './firebase'


function color_name(letter, teams) {
  const node = document.createElement("p");
  const r = 14
  console.log("letter ")
  console.log(letter)
  let color = teams[letter]?.color
  if (!color) {
    color = "#000000"
  }
  console.log(color)
  node.innerHTML = '<svg width="' + r + '" height="14"><rect width="14" height="14" style="fill:' + color + ';stroke-width:3;stroke:rgb(0,0,0)" /></svg> ' + teams[letter].name;
  return node;
}

async function getExtraText() {
  const dbRef = ref(db);
  const snapshot = await get(dbRef, 'extra_text');
  return snapshot.val()['extra_text']
}

async function makeTables() {
  const [scores, eggs_remaining, last_egg_time, sorted_teams, team_eggs, teams] = await getStats()
  let body = document.createElement('div');
  body.className = "content";
  document.body.appendChild(body);

  let h = document.createElement('h2')
  h.appendChild(document.createTextNode('Standings'));
  body.appendChild(h);

  // Table 1 ===============================
  let tbl = document.createElement('table');
  tbl.style.width = '700px';
  tbl.style.border = '2px solid black';

  let th = tbl.createTHead();
  let tr = th.insertRow(0);
  tr.insertCell().innerHTML = "<b>Place</b>";
  tr.insertCell().innerHTML = "<b>Team</b>";
  tr.insertCell().innerHTML = "<b>Score</b>";
  tr.insertCell().innerHTML = "<b>Team Clues</b>";
  tr.insertCell().innerHTML = "<b>GM Clues</b>";
  tr.insertCell().innerHTML = "<b>Time</b>";
  tr.insertCell().innerHTML = "<b>Hint</b>";

  for (let i = 0; i < sorted_teams.length; i++) {
    const k = sorted_teams[i];
    const team = teams[k];
    if (k == "GMs") {
      continue;
    }
    if (team == undefined){
      continue
    }
    let tbl_row = tbl.insertRow();
    tbl_row.insertCell().appendChild(document.createTextNode(i + 1));
    tbl_row.insertCell().appendChild(color_name(k, teams));
    tbl_row.insertCell().appendChild(document.createTextNode(scores[k]));

    let find_time = last_egg_time[k];
    let team_thing_count = team_eggs[k];
    let gm_thing_count = scores[k] - team_thing_count;
    tbl_row.insertCell().appendChild(document.createTextNode(team_thing_count));
    tbl_row.insertCell().appendChild(document.createTextNode(gm_thing_count));
    tbl_row.insertCell().appendChild(document.createTextNode(!find_time ? "\u2014" : find_time));
    tbl_row.insertCell().appendChild(document.createTextNode(team.hint_used ? "Used" : "Unused"));
  }
  body.appendChild(tbl);

  let ranking_description = document.createElement("p");
  ranking_description.innerHTML = "Ranking is based first on number of clues found, then number of team clues found, then the last time that the team found a clue."
  body.appendChild(ranking_description);

  // Title ==================================

  h = document.createElement('h2')
  h.appendChild(document.createTextNode('Clues Remaining: ' + eggs_remaining));
  body.appendChild(h);

  // Table 2 ================================
  tbl = document.createElement('table');
  tbl.style.width = '700px';
  tbl.style.border = '2px solid black';

  tr = tbl.createTHead().insertRow(0);
  th = tr.insertCell(0)
  th.innerHTML = "<b>Clue</b>";
  th.colSpan = 2;
  tr.insertCell(1).innerHTML = "<b>Finding Team</b>";
  tr.insertCell(2).innerHTML = "<b>Time Found</b>";

  for (let [k, team] of Object.entries(teams)) {
    let first = true
    const ordered_eggs = Object.keys(team.eggs).sort().reduce(
      (obj, key) => { 
        obj[key] = team.eggs[key]; 
        return obj;
      }, 
      {}
    );
    for (let [eggname, egg] of Object.entries(ordered_eggs)) {
      let tr = tbl.insertRow();
      if (first) {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(team.name));
        td.rowSpan = Object.keys(team.eggs).length;
        tr.className = "border_top";
      }
      first = false
      if (k == "GMs" && eggname == "Hidden Link" && !egg.finder) {
        let link = document.createElement("a");
        link.className = "hidden"
        link.href = "https://imgur.com/8UwC5dU"
        link.appendChild(document.createTextNode("Hidden Link"))
        tr.insertCell().appendChild(link);
      } else {
        tr.insertCell().appendChild(document.createTextNode(eggname));
      }
      tr.insertCell().appendChild(!egg.finder ? document.createTextNode("\u2014") : color_name(egg.finder, teams));
      tr.insertCell().appendChild(document.createTextNode(!egg.found_time ? "\u2014" : egg.found_time));
    }
  }
  body.appendChild(tbl);

  let permanode = document.createElement("p");
  permanode.innerHTML = await getExtraText();
  body.appendChild(permanode);

  let cluePDF = document.createElement("a");
  cluePDF.href="https://docs.google.com/document/d/e/2PACX-1vSlXMmcKXjumwmldK2PdoKoe9mROMUF79UnbimsEh-FusTwOTMn9PLgHjn6X_0B1DDwLA_xqHk_PkMW/pub"
  cluePDF.appendChild(document.createTextNode("Clue PDF"))
  body.appendChild(cluePDF);

  let timerElement = document.createElement('p')
  let startTime = new Date('2023/04/09 12:05:00')
  setInterval(() => {
    const now = new Date()
    const diff_ms = (now - startTime);
    const diff_s = Math.round(Math.abs(diff_ms) / 1000)
    const s = diff_s % 60;
    const diff_m = Math.floor(diff_s / 60)
    const m = diff_m % 60;
    const diff_h = Math.floor(diff_m / 60)
    if (diff_ms > 0) {
      timerElement.innerHTML = `Time since contest has started: ${diff_h} hours, ${m} minutes ${s} seconds`;
    } else {
      timerElement.innerHTML = `Time till the contest will start: ${diff_h} hours, ${m} minutes ${s} seconds`;
    }
  }, 1000);
  body.appendChild(timerElement)
}

makeTables()