import React from "react";
import { ResultsService } from "./data/resultsService";

const Result = ({ finalTally, quizResult }) => {
  const resultsArray = ResultsService.convertStateToArrayOfObjects(finalTally);
  const sortedArray = ResultsService.sortResults(resultsArray);
  const renderSortedResults = sortedArray.map((result) => {
    const numType = ResultsService.convertLetterToNumber(result.letter);
    return (
      <div key={result.letter}>
        {numType} {"- "}
        {ResultsService.resultMap[numType]} : {result.count}
      </div>
    );
  });

  const resultNumber = ResultsService.convertLetterToNumber(quizResult);
  const resultName = ResultsService.resultMap[resultNumber];

  return (
    <div className="result">
      <p>{`You got: ${resultNumber} - ${resultName}!`}</p>
      <p>Here are the full results in order of affinity:</p>
      <div className="full-results">{renderSortedResults}</div>
    </div>
  );
};

export default Result;
