var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "1": "Red-1",
        "4": "Blue-1<br>",
        "2": "Red-2",
        "5": "Blue-2<br>",
        "3": "Red-3",
        "6": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Fuel Scored",
      "code": "afs",
      "type": "counter"
    },
        { "name": "Fuel Missed",
      "code": "afs",
      "type": "counter"
    },
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "1": "Climbed<br>",
        "2": "Attempted<br>",
        "0": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Pickup from<br>Neutral Zone",
      "code": "aff",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Fuel Scored",
      "code": "tfs",
      "type": "counter"
    },
    { "name": "Pickup from Depot",
      "code": "tfd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "tfo",
      "type": "bool"
    },
    { "name": "Pickup from Floor",
      "code": "tff",
      "type": "bool"
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz",
      "type": "bool"
    },
    { "name": "Pass from Opp<br>Alliance Zone",
      "code": "poa",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "4": "Attempted<br>",
        "0": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "Not Effective<br>",
        "2": "Average<br>",
        "3": "Very Effective<br>",
        "0": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Below Average<br>",
        "2": "Average<br>",
        "3": "Good<br>",
        "4": "Excellent<br>",
        "0": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Fuel Percentage",
      "tooltip": "What percentage of the total fuel for this alliance did this robot score?",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 100
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
