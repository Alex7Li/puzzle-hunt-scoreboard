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
