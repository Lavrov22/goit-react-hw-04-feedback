import PropTypes from 'prop-types';
import { FeedbackList, Button } from "components/FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
            <FeedbackList>
                {options.map((option, idx) => (
                    <li key={idx}>
                        <Button type="button" onClick={onLeaveFeedback} name={option}>{option}</Button>
                    </li>
                ))}
            </FeedbackList>
    );
            
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}
