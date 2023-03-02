import { getStats } from './processing'
import { ref, get } from '@firebase/database';
import { db } from './firebase'


function color_name(team_name, teams) {
  const node = document.createElement("span");
  const r = 14
  let color = teams[team_name]?.color
  if (!color) {
    color = "#000000"
  }
  node.innerHTML = '<svg width="' + r + '" height="14"><rect width="14" height="14" style="fill:' + color + ';stroke-width:3;stroke:rgb(0,0,0)" /></svg> ' + team_name;
  return node;
}

async function getExtraText() {
  const dbRef = ref(db);
  const snapshot = await get(dbRef, 'extra_text');
  return snapshot.val()['extra_text']
}

async function try_password(code) {
  const dbRef = ref(db)
  const snapshot = await get(dbRef, "Password_data");
  const pval = snapshot.val()["Password_data"]
  return pval[code]
}

async function makeTables() {
  console.warn("YOU DO NOT NEED THE CONSOLE FOR ANY CLUE. PLEASE DO NOT HACK THIS SITE.")
  const [scores, points_remaining, last_egg_time, sorted_teams, solved, teams] = await getStats()
  let body = document.createElement('div');
  body.className = "content";
  document.body.appendChild(body);

  // PASSWORD SUBMISSION

  const pass_input = document.createElement('input', {type: "text"})
  pass_input.id = "password_input"
  const submit_btn = document.createElement('button')
  submit_btn.innerHTML = "Submit password"
  const response_text = document.createElement('p');
  submit_btn.onclick = async () => {
    const try_pass = document.getElementById('password_input').value;
    const response = await try_password(try_pass);
    if (response != undefined) {
      response_text.innerHTML = response;
    }
  };
  body.appendChild(pass_input)
  body.appendChild(submit_btn)
  body.appendChild(response_text)
  
  // STANDINGS

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
  tr.insertCell().innerHTML = "<b>Solved</b>";
  tr.insertCell().innerHTML = "<b>Time</b>";
  tr.insertCell().innerHTML = "<b>Hint</b>";

  for (let i = 0; i < sorted_teams.length; i++) {
    const team_name = sorted_teams[i];
    const team = teams[team_name];
    if (team_name == "GMs") {
      continue;
    }
    if (team == undefined) {
      continue
    }
    let tbl_row = tbl.insertRow();
    let rank_text = i + 1;
    if (rank_text == 1) {
      rank_text = '🥇'
    } else if (rank_text == 2) {
      rank_text = '🥈'
    } else if (rank_text == 3) {
      rank_text = '🥉'
    }
    tbl_row.insertCell().appendChild(document.createTextNode(rank_text));
    tbl_row.insertCell().appendChild(color_name(team_name, teams));
    tbl_row.insertCell().appendChild(document.createTextNode(scores[team_name]));
    tbl_row.insertCell().appendChild(document.createTextNode(solved[team_name]));
    const find_time = last_egg_time[team_name];
    tbl_row.insertCell().appendChild(document.createTextNode(!find_time ? "\u2014" : find_time));
    let hint_text = "Unused";
    if (team.hints_used == 1) {
      hint_text = "Used";
    } else if (team.hints_used > 1) {
      hint_text = "Used " + team.hints_used;
    }
    tbl_row.insertCell().appendChild(document.createTextNode(hint_text));
  }
  body.appendChild(tbl);

  const ranking_description = document.createElement("p");
  ranking_description.innerHTML = "Ranking is based first on number of clues found, then number of clues solved, then the last time that the team found a clue."
  body.appendChild(ranking_description);

  // Title ==================================

  h = document.createElement('h2')
  h.appendChild(document.createTextNode('Points Remaining: ' + points_remaining));
  body.appendChild(h);

  const table_description = document.createElement("p");
  table_description.innerHTML = "The first 3 solvers of each clue get points based on this table."
  body.appendChild(table_description);

  // Table 2 ================================
  tbl = document.createElement('table');
  tbl.style.width = '700px';
  tbl.style.border = '2px solid black';

  tr = tbl.createTHead().insertRow(0);
  th = tr.insertCell(0)
  th.innerHTML = "<b>Clue</b>";
  th.colSpan = 2;
  tr.insertCell(1).innerHTML = "<b>🥇</b>";
  tr.insertCell(2).innerHTML = "🥈";
  tr.insertCell(3).innerHTML = "🥉";

  let teamNames = []
  for (let [name, team] of Object.entries(teams)) {
    teamNames.push(name)
  }
  teamNames.sort(
    function (a, b) {
      if (a == 'GMs') {
        return 1;
      } else if(b == 'GMs') {
        return -1;
      }
      return a < b ? -1 : 1;
    });
  for (let name of teamNames) {
    const team = teams[name];
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
        td.appendChild(document.createTextNode(name));
        td.rowSpan = Object.keys(team.eggs).length;
        tr.className = "border_top";
      }
      first = false;
      tr.insertCell().appendChild(document.createTextNode(eggname));
      for (let i of [0, 1, 2]) {
        let child = document.createTextNode(egg.point_values[i])
        if (egg.finders[i]) {
          child = document.createElement('div')
          const finderInfo = document.createElement("p");
          finderInfo.className = "tooltip";
          const new_html = egg.point_values[i] + ' '
            + color_name(egg.finders[i], teams).innerHTML;
          finderInfo.innerHTML = new_html;
          const tooltip = document.createElement("span");
          tooltip.innerHTML = egg.find_times[i];
          tooltip.className = "tooltiptext";
          finderInfo.appendChild(tooltip)
          child.appendChild(finderInfo)
        }
        tr.insertCell().appendChild(child);
      }
    }
  }
  body.appendChild(tbl);

  let permanode = document.createElement("p");
  permanode.innerHTML = await getExtraText();
  body.appendChild(permanode);

  let cluePDF = document.createElement("a");
  cluePDF.href = "https://docs.google.com/document/d/e/2PACX-1vSlXMmcKXjumwmldK2PdoKoe9mROMUF79UnbimsEh-FusTwOTMn9PLgHjn6X_0B1DDwLA_xqHk_PkMW/pub"
  cluePDF.appendChild(document.createTextNode("Clue PDF [Old: From Fall 2022 Hunt]"))
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
