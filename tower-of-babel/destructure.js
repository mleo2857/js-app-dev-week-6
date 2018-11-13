var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

var {name, birth} = json;
var familyName = name.family;
var birthDay = birth.day;

console.log(familyName);
console.log(birthDay);
