var teams = {
    "A": {
        "name" : "Alpha",
        "color" : "#ff0000",
        "eggs" : [
            /*1*/ {"finder": "B", "found_time": "12:30"},
            /*2*/ {"finder": "B", "found_time": "12:31"}
        ]
    },
    "B": {
        "name" : "Bravo",
        "color" : "#00ff00",
        "eggs" : [
            /*1*/ {"finder": "A", "found_time": "12:50"},
            /*2*/ {"finder": "D", "found_time": "1:00"}
        ]
    },
    "C": {
        "name" : "Charley",
        "color" : "#0000ff",
        "eggs" : [
            /*1*/ {"finder": "D", "found_time": "1:20"},
            /*2*/ {"finder": null, "found_time": null}
        ]
    },
    "D": {
        "name" : "Delta",
        "color" : "#ffff00",
        "eggs" : [
            /*1*/ {"finder": null, "found_time": null},
            /*2*/ {"finder": null, "found_time": null}
        ]
    },
    "E": {
        "name" : "Echo",
        "color" : "#ff00ff",
        "eggs" : [
            /*1*/ {"finder": "F", "found_time": "3:00"},
            /*2*/ {"finder": null, "found_time": null}
        ]
    },
    "F": {
        "name" : "Foxtrot",
        "color" : "#00ffff",
        "eggs" : [
            /*1*/ {"finder": null, "found_time": null},
            /*2*/ {"finder": null, "found_time": null}
        ]
    },
    "GMs": {
        "name" : "GMs",
        "color" : "#000000",
        "eggs" : [
            /* 1*/ {"finder": null, "found_time": null},
            /* 2*/ {"finder": null, "found_time": null},
            /* 3*/ {"finder": null, "found_time": null},
            /* 4*/ {"finder": null, "found_time": null},
            /* 5*/ {"finder": null, "found_time": null},
            /* 6*/ {"finder": null, "found_time": null},
            /* 7*/ {"finder": null, "found_time": null},
            /* 8*/ {"finder": null, "found_time": null},
            /* 9*/ {"finder": null, "found_time": null},
            /*10*/ {"finder": null, "found_time": null},
            /*11*/ {"finder": null, "found_time": null},
            /*12*/ {"finder": null, "found_time": null},
            /*13*/ {"finder": null, "found_time": null},
            /*14*/ {"finder": "E", "found_time": "2:59"},
            /*15*/ {"finder": null, "found_time": null},
            /*16*/ {"finder": null, "found_time": null},
            /*17*/ {"finder": null, "found_time": null},
            /*18*/ {"finder": null, "found_time": null},
            /*19*/ {"finder": null, "found_time": null},
            /*20*/ {"finder": null, "found_time": null},
        ] 
    }
}
