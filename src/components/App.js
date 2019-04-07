import React from "react";
import update from "react-addons-update";

import Quiz from "./Quiz";
import Result from "./Result";
import quizQuestions from "./data/quizQuestions";
import SplashScreen from "./SplashScreen";

import "./App.css";

class App extends React.Component {
  state = {
    counter: 0,
    questionId: 1,
    answerOptions: [],
    answer: "",
    answersCount: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0,
      H: 0,
      I: 0
    },
    result: ""
  };

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0]
    });
  }

  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  };

  getResults = () => {
    const answersCount = this.state.answersCount;
    return Object.keys(answersCount).reduce((a, b) =>
      answersCount[a] > answersCount[b] ? a : b
    );
  };

  setResults = (result) => {
    this.setState({ result });
  };

  setUserAnswer = (answer) => {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 }
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      answerOptions: quizQuestions[counter],
      answer: ""
    });
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  };

  renderResult = () => {
    return (
      <Result
        quizResult={this.state.result}
        finalTally={this.state.answersCount}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="App">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      </div>
    );
  }
}

export default SplashScreen(App);
