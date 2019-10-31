// teams = ...

scores = {}
for (var t in teams) {
    if(t != "GMs"){
        scores[t] = 0;
    }
}
for (var t in teams) {
    for (var egg in t.eggs){
        scores[egg.finder]++;
    }
}

/*
TABLE 1:
Color, Name, eggno, last time found

TABLE 2:
Name, index, other name, time
*/
