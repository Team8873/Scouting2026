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
      "required": true
    },
    {
      "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": true
    },
    {
      "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": [
        { "value": "qm", "label": "Quals<br>" },
        { "value": "sf", "label": "Semifinals<br>" },
        { "value": "f", "label": "Finals" }
      ],
      "defaultValue": "qm",
      "required": true
    },
    {
      "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": true
    },
    {
      "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": [
        { "value": "r1", "label": "Red-1" },
        { "value": "b1", "label": "Blue-1<br>" },
        { "value": "r2", "label": "Red-2" },
        { "value": "b2", "label": "Blue-2<br>" },
        { "value": "r3", "label": "Red-3" },
        { "value": "b3", "label": "Blue-3" }
      ],
      "required": true
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
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter",
      "required": true
    },
    {
      "name": "Fuel Acc",
      "code": "ac",
      "type": "radio",
      "choices": [
        { "value": 0, "label": "0%" },
        { "value": 0.2, "label": "20%" },
        { "value": 0.4, "label": "40%" },
        { "value": 0.6, "label": "60%" },
        { "value": 0.8, "label": "80%" },
        { "value": 1, "label": "100%" }
      ],
      "required": true
    },
    {
      "name": "Fuel Passed",
      "code": "afo",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter",
      "required": true
    },
    {
      "name": "Fuel Picked Up",
      "code": "aff",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    {
      "name": "Climb?",
      "code": "afd",
      "type": "bool",
      "required": true
    },
    {
      "name": "Alliance Won Auton?",
      "code": "tfs",
      "type": "bool",
      "required": true
    }
  ],
  "teleop": [
    {
      "name": "Fuel Fired",
      "code": "tfd",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    {
      "name": "Fired Accuracy",
      "code": "tfo",
      "type": "radio",
      "choices": [
        { "value": 0, "label": "0%" },
        { "value": 0.2, "label": "20%" },
        { "value": 0.4, "label": "40%" },
        { "value": 0.6, "label": "60%" },
        { "value": 0.8, "label": "80%" },
        { "value": 1, "label": "100%" }
      ],
      "required": true
    },
    {
      "name": "Fuel Passed",
      "code": "tff",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    }
  ],
  "endgame": [
    {
      "name": "Climb",
      "code": "pnz",
      "type": "radio",
      "choices": [
        { "value": 1, "label": "Level 1<br>" },
        { "value": 2, "label": "Level 2<br>" },
        { "value": 3, "label": "Level 3<br>" },
        { "value": 0.5, "label": "Attempted but Failed<br>" },
        { "value": 0, "label": "Not Attempted<br>" }
      ]
    },
    {
      "name": "Climb Position",
      "code": "poa",
      "type": "radio",
      "choices": [
        { "value": 1, "label": "Inside<br>" },
        { "value": 2, "label": "Outside<br>" },
        { "value": 0, "label": "Not Attempted<br>" }
      ]
    }
  ],
  "postmatch": [
    {
      "name": "Driver Skill",
      "code": "tc",
      "type": "radio",
      "choices": [
        { "value": 1, "label": "Not Effective<br>" },
        { "value": 2, "label": "Average<br>" },
        { "value": 3, "label": "Very Effective<br>" },
        { "value": 0, "label": "Not Observed<br>" }
      ]
    },
    {
      "name": "Defense Rating",
      "code": "ds",
      "type": "radio",
      "choices": [
        { "value": 1, "label": "Below Average<br>" },
        { "value": 2, "label": "Average<br>" },
        { "value": 3, "label": "Good<br>" },
        { "value": 4, "label": "Excellent<br>" },
        { "value": 0, "label": "Did not play defense<br>" }
      ]
    },
    {
      "name": "Speed Rating",
      "code": "dr",
      "type": "radio",
      "choices": [
        { "value": 1, "label": "1 (slow)<br>" },
        { "value": 2, "label": "2<br>" },
        { "value": 3, "label": "3<br>" },
        { "value": 4, "label": "4<br>" },
        { "value": 5, "label": "5 (fast)" }
      ],
      "defaultValue": 3
    },
    { "name": "Crossed Trench", "code": "sr", "type": "bool" },
    { "name": "Crossed Bump", "code": "bmp", "type": "bool" },
    { "name": "Died/Immobilized", "code": "tre", "type": "bool" },
    { "name": "Tippy<br>(almost tipped over)", "code": "die", "type": "bool" },
    {
      "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Was Defended", "code": "all", "type": "bool" },
    { "name": "Comments", "code": "def", "type": "text", "size": 10, "maxSize": 100 }
  ]
}
`;
