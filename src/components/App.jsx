import React, { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
  
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      return {
        [evt.target.name]: prevState[evt.target.name] + 1,
      };
    });
  };

  render() {

    return (<>
      <Section title="Please leave feedback">
        <FeedbackOptions 
            options={Object.keys(this.state)}
             onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
       <Section title="Statistics">
        <Statistics {...this.state} />
          {/* good={this.state.good}
           neutral={this.state.neutral}
           bad={this.state.bad}  */}
        </Section>
  </>);
  }
}


export default App;
