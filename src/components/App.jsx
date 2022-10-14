import { useState } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

// ---------Классы-----------------------
// export class App extends Component{
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   onLeaveFeedback = (e) => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1
//     }));
//   }

//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state
//     return good + neutral + bad;
//   }
  
//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percent = good > 0 ? Math.round(good / total * 100) : 0;
//     return percent;
//   }
  
//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//       return (
//         <>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={this.onLeaveFeedback}>
//             </FeedbackOptions>
//           </Section>
//           {this.countTotalFeedback() === 0 ?
//             <Notification message="There is no feedback"></Notification> :
//             <Section title="Statistics">
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}>
//               </Statistics>
//             </Section>}
          
//     </>
//   );
//   }
// };


// --------------------------------Хуки-------------------

export const App = () => {
  const [good, setGod] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const {name} = e.target;
    switch (name) {
      case 'good':
        setGod(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  }
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percent = good > 0 ? Math.round(good / total * 100) : 0;
    return percent;
  }
  
    const options = ['good', 'neutral', 'bad'];
      return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}>
            </FeedbackOptions>
          </Section>
          {countTotalFeedback() === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              >
              </Statistics>
            </Section>}
          
    </>
  );
};
