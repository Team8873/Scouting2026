var config_data = {
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",

  "prematch": [
    {
      "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    {
      "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": "true"
    },
    {
      "name": "Match Level",
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
    {
      "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    {
      "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "1": "Red-1",
        "2": "Red-2",
        "3": "Red-3",
        "4": "Blue-1<br>",
        "5": "Blue-2<br>",
        "6": "Blue-3"
      },
      "required": "true"
    },
    {
      "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],

  "auton": [
    {
      "name": "Fuel Scored",
      "code": "afs",
      "type": "counter"
    },
    {
      "name": "Fuel Missed",
      "code": "ac",
      "type": "counter"
    },
    {
      "name": "Climb Level",
      "code": "afd",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "4": "Attempted<br>",
        "0": "Not Attempted"
      }
    },
    {
      "name": "Fuel Passed",
      "code": "afo",
      "type": "counter"
    },
    {
      "name": "Fuel Picked up",
      "code": "aff",
      "type": "counter"
    },
    {
      "name": "Team won Auton",
      "code": "tfs",
      "type": "bool"
    }
  ],

  "teleop": [
    {
      "name": "Feul Fired",
      "code": "tfd",
      "type": "counter"
    },
    {
      "name": "Firing Accuracy",
      "code": "tfo",
      "type": "counter"
    },
    {
      "name": "Fuel Passed",
      "code": "tff",
      "type": "counter"
    }
  ],

  "endgame": [
    {
      "name": "Climb",
      "code": "pnz",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "4": "Attempted<br>",
        "0": "Not Attempted"
      }
    },
    {
      "name": "Climb inside or outside?",
      "code": "poa",
      "type": "radio",
      "choices": {
        "1": "Inside<br>",
        "2": "Outside<br>",
        "0": "Not Attempted"
      }
    }
  ],

  "postmatch": [
    {
      "name": "Driver Skill",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Not Effective<br>",
        "2": "Average<br>",
        "3": "Very Effective<br>",
        "0": "Not Observed"
      }
    },
    {
      "name": "Defense Rating",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "Below Average<br>",
        "2": "Average<br>",
        "3": "Good<br>",
        "4": "Excellent<br>",
        "0": "Did not play defense"
      }
    },
    {
      "name": "Speed Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue": "3"
    },
    {
      "name": "Crossed Trench",
      "code": "sr",
      "type": "bool"
    },
    {
      "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    {
      "name": "Died/Immobilized",
      "code": "tre",
      "type": "bool"
    },
    {
      "name": "Tippy<br>(almost tipped over)",
      "code": "die",
      "type": "bool"
    },
    {
      "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "tip",
      "type": "bool"
    },
    {
      "name": "Was Blocked",
      "code": "all",
      "type": "bool"
    },
    {
      "name": "Comments",
      "code": "def",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
};
