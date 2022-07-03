let extra_text = "A Bounty is currently out for a solution to Nagelbalk. (Valid until 1:00)";

let teams = {
    "A": {
        "name" : "Team Kush",
        "color" : "#ff0000",
        "hint_used": false,
        "eggs" : {
            "Kush 1": {"finder": "B", "found_time": "3:25"},
            "Kush 2": {"finder": null, "found_time": null}
        }
    },
    "B": {
        "name" : "Team Whoosh",
        "color" : "#00ff00",
        "hint_used": false,
        "eggs" : {
            "Kush 1": {"finder": "A", "found_time": "2:25"},
            "Kush 2": {"finder": null, "found_time": null}
        }
    },
    "GMs": {
        "name" : "GMs",
        "color" : "#000000",
        "eggs" : {
            "Nagelbalk": {"finder": "A", "found_time": "7:12"},
            "Bitecoin": {"finder": null, "found_time": null},
            "Bounty": {"finder": null, "found_time": null},
            "Hidden 1": {"finder": null, "found_time": null},
        }
    }
}
