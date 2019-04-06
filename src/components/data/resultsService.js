export class ResultsService {
  static typeMap = [
    { letter: "A", number: 9 },
    { letter: "B", number: 6 },
    { letter: "C", number: 3 },
    { letter: "D", number: 1 },
    { letter: "E", number: 4 },
    { letter: "F", number: 2 },
    { letter: "G", number: 8 },
    { letter: "H", number: 5 },
    { letter: "I", number: 7 }
  ];

  static resultMap = [
    "",
    "The Reformer",
    "The Helper",
    "The Achiever",
    "The Individualist",
    "The Investigator",
    "The Loyalist",
    "The Enthusiast",
    "The Challenger",
    "The Peacemaker"
  ];

  // Converts Letter result to enneagram number type
  static convertLetterToNumber = (letter) => {
    return this.typeMap.find((type) => type.letter === letter).number;
  };

  static convertStateToArrayOfObjects = (results) => {
    return Object.entries(results).map(([key, value]) => ({
      letter: key,
      count: value
    }));
  };

  static sortResults = (resultsArray) => {
    return resultsArray.sort((a, b) => b.count - a.count);
  };
}
