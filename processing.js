function minutes_since_noon(timestr) {
    if(timestr == null){
        return -1;
    }
    var hrs_mins = timestr.split(":");
    var hrs = parseInt(hrs_mins[0]);
    var mins = parseInt(hrs_mins[1]);
    if (hrs == 12){
        hrs = 0;
    }
    return 60 * hrs + mins;
}

scores = {}
last_egg_time = {}
team_eggs = {}
eggs_remaining = 0

for (var t in teams) {
    if(t != "GMs"){
        scores[t] = 0;
        last_egg_time[t] = null;
        team_eggs[t] = 0;
    }
}
for (let [k, team] of Object.entries(teams)) {
    for (var i=0; i<team.eggs.length; i++){
        var finder = team.eggs[i].finder
        var found_time = team.eggs[i].found_time
        if(finder == null){
            eggs_remaining++;
            continue;
        }
        scores[finder]++;
        if(k != "GMs"){
            team_eggs[finder]++;
        }
        if (minutes_since_noon(found_time) > 
                minutes_since_noon(last_egg_time[finder])){
            last_egg_time[finder] = found_time;
        }
    }
}

var sorted_teams = Object.keys(teams).filter(function(value, index, arr){
    return value != "GMs";
});

sorted_teams.sort(
    function(a, b){
        if(scores[a] != scores[b]){
            return scores[a] > scores[b] ? -1 : 1;
        }
        var mins_a = minutes_since_noon(last_egg_time[a]);
        var mins_b = minutes_since_noon(last_egg_time[b]);
        if (mins_a != mins_b){
            return mins_a < mins_b ? -1 : 1;
        }
        return a < b ? -1: 1; 
    }
);
