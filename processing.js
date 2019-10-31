// teams = ...

scores = {}
for (var t in teams) {
    if(t != "GMs"){
        scores[t] = 0;
    }
}
for (let [k, team] of Object.entries(teams)) {
    for (var i=0; i<team.eggs.length; i++){
        scores[team.eggs[i].finder]++;
    }
}

/*
TABLE 1:
Color, Name, eggno, last time found

TABLE 2:
Name, index, other name, time
*/
