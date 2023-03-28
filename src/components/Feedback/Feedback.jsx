import { Component } from "react";
import { Fragment } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    hendelGood = () => {
        this.setState((prev) => { 
            return { good: prev.good + 1 };
        });
    }
    hendelNeutral = () => {
        this.setState((prev) => { 
            return { neutral: prev.neutral + 1 };
        });
    }
    hendelBad = () => {
        this.setState((prev) => { 
            return { bad: prev.bad + 1 };
        });
    }

    render() {
        const { good, neutral, bad } = this.state;
        let total = 0;
        const countTotalFeedback = () => {
            total = good + neutral + bad;
            return total;    
        };
        const countPositiveFeedbackPercentage = () => {
            const persent = Math.ceil(100 / total * good);
            return persent;    
        };

        return (
            <>
                <Section title={'Pleace leave FeedBack'}>
                    <FeedbackOptions
                    hendelGood={this.hendelGood}
                    hendelNeutral={this.hendelNeutral}
                    hendelBad={this.hendelBad} />
                </Section>
                <Section title={'Statistics'}>
                    {countTotalFeedback() === 0 ? <Notification message={'There is no feedback'} /> : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        countTotalFeedback={countTotalFeedback}
                        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                    />}
                </Section>
            </>
        );
    }
}

export default Feedback;