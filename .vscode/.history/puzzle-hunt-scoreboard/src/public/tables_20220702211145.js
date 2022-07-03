import { getStats } from './processing'
function color_name(letter, teams) {
  const node = document.createElement("p");
  const r = 14
  node.innerHTML = '<svg width="' + r + '" height="14"><rect width="14" height="14" style="fill:' + teams[letter].color + ';stroke-width:3;stroke:rgb(0,0,0)" /></svg> ' + teams[letter].name;
  return node;
}

async function getExtraText() {
  const dbRef = ref(db);
  const snapshot = await get(dbRef, 'extra_text');
  return snapshot.val()['extra_text']
}
async function makeTables() {
  const [scores, eggs_remaining, last_egg_time, sorted_teams, team_eggs, teams] = await getStats()
  console.log(scores)
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
    let tbl_row = tbl.insertRow();
    tbl_row.insertCell().appendChild(document.createTextNode(i + 1));
    tbl_row.insertCell().appendChild(color_name(k, teams));
    tbl_row.insertCell().appendChild(document.createTextNode(scores[k]));

    let find_time = last_egg_time[k];
    let team_thing_count = team_eggs[k];
    let gm_thing_count = scores[k] - team_thing_count;
    tbl_row.insertCell().appendChild(document.createTextNode(team_thing_count));
    tbl_row.insertCell().appendChild(document.createTextNode(gm_thing_count));
    tbl_row.insertCell().appendChild(document.createTextNode(find_time == null ? "\u2014" : find_time));
    tbl_row.insertCell().appendChild(document.createTextNode(team.hint_used ? "Used" : "Unused"));
  }
  console.log("aa")
  body.appendChild(tbl);

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
    for (let [eggname, egg] of Object.entries(team.eggs)) {
      let tr = tbl.insertRow();
      if (first) {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(team.name));
        td.rowSpan = Object.keys(team.eggs).length;
        tr.className = "border_top";
      }
      first = false
      if (k == "GMs" && eggname == "Hidden 1" && egg.finder == null) {
        let link = document.createElement("a");
        link.innerHTML = "<a href=https://defuse.ca/b/DRbUMDTywiTGMbENXSbMyP>Hidden 1</a>";
        tr.insertCell().appendChild(link);
      } else {
        tr.insertCell().appendChild(document.createTextNode(eggname));
      }
      tr.insertCell().appendChild(egg.finder == null ? document.createTextNode("\u2014") : color_name(egg.finder));
      tr.insertCell().appendChild(document.createTextNode(egg.found_time == null ? "\u2014" : egg.found_time));
    }
  }
  body.appendChild(tbl);

  let permanode = document.createElement("p");
  permanode.innerHTML = getExtraText;
  body.appendChild(permanode);
}

makeTables()