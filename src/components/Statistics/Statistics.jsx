import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    return (
        <>
            <ul className={css.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {countTotalFeedback()}</li>
                <li>Positive feedback: {countPositiveFeedbackPercentage()} %</li>
            </ul>
        </>
    );
};

Statistics.protoTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
}

export default Statistics;