// know: teams, scores, last_egg_time
var body = document.createElement('div');
body.className = "content";
document.body.appendChild(body);


h = document.createElement('h2')
h.appendChild(document.createTextNode('Standings'));
body.appendChild(h);

// Table 1 ===============================
var tbl = document.createElement('table');
tbl.style.width = '500px';
tbl.style.border = '2px solid black';

var th = tbl.createTHead();
var tr = th.insertRow(0);
tr.insertCell().innerHTML = "<b>Place</b>";
tr.insertCell().innerHTML = "<b>Team</b>";
tr.insertCell().innerHTML = "<b>Score</b>";
tr.insertCell().innerHTML = "<b>Team Clues</b>";
tr.insertCell().innerHTML = "<b>GM Clues</b>";
tr.insertCell().innerHTML = "<b>Time</b>";

for(i=0; i<sorted_teams.length; i++){
    k = sorted_teams[i];
    team = teams[k];
    if (k=="GMs") {
        continue;
    }
    var tr = tbl.insertRow();
    tr.insertCell().appendChild(document.createTextNode(i+1));
    tr.insertCell().appendChild(document.createTextNode(team.name));
    tr.insertCell().appendChild(document.createTextNode(scores[k]));
    var find_time = last_egg_time[k];
    var team_thing_count = team_eggs[k];
    var gm_thing_count = scores[k] - team_thing_count;
    tr.insertCell().appendChild(document.createTextNode(team_thing_count));
    tr.insertCell().appendChild(document.createTextNode(gm_thing_count));
    tr.insertCell().appendChild(document.createTextNode(find_time == null ? "\u2014": find_time));

}
body.appendChild(tbl);

// Title ==================================

h = document.createElement('h2')
h.appendChild(document.createTextNode('Clues Remaining: ' + eggs_remaining));
body.appendChild(h);

// Table 2 ================================
// Name-index, finder, time
var tbl = document.createElement('table');
tbl.style.width = '500px';
tbl.style.border = '2px solid black';

var tr = tbl.createTHead().insertRow(0);
var th = tr.insertCell(0) 
th.innerHTML = "<b>Clue</b>";
th.colSpan = 2;
tr.insertCell(1).innerHTML = "<b>Finding Team</b>";
tr.insertCell(2).innerHTML = "<b>Time Found</b>";

for (let [k, team] of Object.entries(teams)) {
    for(var i = 0; i<team.eggs.length; i++){
        egg = team.eggs[i];
        var tr = tbl.insertRow();
        if (i==0){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(team.name));
            td.rowSpan = team.eggs.length;
            tr.className = "border_top";
        }
        tr.insertCell().appendChild(document.createTextNode(i+1));
        tr.insertCell().appendChild(document.createTextNode(egg.finder == null ? "\u2014" : teams[egg.finder].name));
        tr.insertCell().appendChild(document.createTextNode(egg.found_time == null ? "\u2014" : egg.found_time));
    }
}
body.appendChild(tbl);

