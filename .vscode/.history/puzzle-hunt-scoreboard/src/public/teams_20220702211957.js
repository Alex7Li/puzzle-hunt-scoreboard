// Example. The real data is in the database
const extra_text = "A Bounty is currently out for a solution to Nagelbalk. (Valid until 1:00)";

const teams = {
    "A": {
        "name" : "Team Kush",
        "hint_used": false,
        "eggs" : {
            "Kush 1": {"finder": "B", "found_time": "3:25"},
            "Kush 2": {"finder": "", "found_time": ""}
        }
    },
    "B": {
        "name" : "Team Whoosh",
        "hint_used": false,
        "eggs" : {
            "Whoosh 1": {"finder": "A", "found_time": "2:25"},
        }
    },
    "GMs": {
        "name" : "GMs",
        "color" : "#000000",
        "eggs" : {
            "Nagelbalk": {"finder": "A", "found_time": "7:12"},
            "Bitecoin": {"finder": "", "found_time": ""},
            "Bounty": {"finder": "", "found_time": ""},
        }
    }
}

export {teams, extra_text}