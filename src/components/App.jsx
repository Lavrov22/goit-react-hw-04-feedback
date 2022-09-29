import { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  }

  totalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }
  
  positivePercentage = () => {
    const total = this.totalFeedback();
    const { good } = this.state;
    const percent = Math.round(good / total * 100);
    return percent;
  }
  
  render() {
    const options = Object.keys(this.state);
      return (
    <>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}>
          </Statistics>
    </>
  );
  }
};
