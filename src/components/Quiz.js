import React from "react";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Quiz = (props) => {
  // iterate over the answer options to create array of 2 questions.
  const questionArray = Object.entries(props.answerOptions);

  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key[1]}
        answerContent={key[1]}
        answerType={key[0]}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };

  return (
    <div className="quiz" key={props.questionId}>
      <Question />
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}
        transitionAppear
        transitionAppearTimeout={800}
      >
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <ul className="answerOptions">
          {questionArray.map(renderAnswerOptions)}
        </ul>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Quiz;
