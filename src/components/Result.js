import React from "react";
import { ResultsService } from "./data/resultsService";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
  const resultGif = () => {
    return (
      <img src={ResultsService.gifMap[resultNumber]} alt="enneagram gif" />
    );
  };

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result">
        <div className="result__type">
          {resultNumber}: {resultName}
          <div className="result__img">{resultGif()}</div>
        </div>
        <div className="results__full">
          <h2>Here are the full results, in order of affinity:</h2>
          <div className="results__table">{renderSortedResults}</div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default Result;
