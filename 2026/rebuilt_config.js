/* ===============================
   CONFIG DATA (PURE JSON)
   =============================== */

var config_data = `
{
  "dataFormat": "tsv",
  "title": "ScoutingForMP",
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
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
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
      "name": "Fuel Fired",
      "code": "afs",
      "type": "counter",
      "buttons": [1, 5, 10, -1, -5]
    },
    {
      "name": "Fuel Acc",
      "code": "ac",
      "type": "radio",
      "choices": {
        "0": "0%",
        "0.2": "20%",
        "0.4": "40%",
        "0.6": "60%",
        "0.8": "80%",
        "1": "100%"
      }
    },
    {
      "name": "Climb?",
      "code": "afd",
      "type": "bool"
    },
    {
      "name": "Fuel Passed",
      "code": "afo",
      "type": "counter"
    },
    {
      "name": "Fuel Picked Up",
      "code": "aff",
      "type": "counter"
    },
    {
      "name": "Alliance Won Auton?",
      "code": "tfs",
      "type": "bool"
    }
  ],
  "teleop": [
    {
      "name": "Fuel Fired",
      "code": "tfd",
      "type": "counter"
    },
    {
      "name": "Fired Accuracy",
      "code": "tfo",
      "type": "radio",
      "choices": {
        "0": "0%",
        "0.2": "20%",
        "0.4": "40%",
        "0.6": "60%",
        "0.8": "80%",
        "1": "100%"
      }
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
        "0.5": "Attempted but Failed<br>",
        "0": "Not Attempted<br>"
      }
    },
    {
      "name": "Climb Position",
      "code": "poa",
      "type": "radio",
      "choices": {
        "1": "Inside<br>",
        "2": "Outside<br>",
        "0": "Not Attempted<br>"
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
        "0": "Not Observed<br>"
      },
      "defaultValue": "0"
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
        "0": "Did not play defense<br>"
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
      "name": "Was Defended",
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
}
`;
