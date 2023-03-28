import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ hendelGood, hendelNeutral, hendelBad }) => {
    return (
        <ul className={css.list}>
            <li><button onClick={hendelGood} type="button">Good</button></li>
            <li><button onClick={hendelNeutral} type="button">Neutral</button></li>
            <li><button onClick={hendelBad} type="button">Bad</button></li>
        </ul>
    );
};

FeedbackOptions.protoTypes = {
    hendelGood: PropTypes.func.isRequired,
    hendelNeutral: PropTypes.func.isRequired,
    hendelBad: PropTypes.func.isRequired,
}

export default FeedbackOptions;