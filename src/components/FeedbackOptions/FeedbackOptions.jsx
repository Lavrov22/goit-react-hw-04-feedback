
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <section>
            <h1>Please leave feedback</h1>
            <ul>
                {options.map((option, idx) => (
                    <li key={idx}>
                        <button type="button" onClick={onLeaveFeedback} name={option}>{option}</button>
                    </li>
                ))}
            </ul>
        </section>
    );
            
}