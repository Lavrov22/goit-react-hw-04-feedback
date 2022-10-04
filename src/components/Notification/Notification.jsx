import PropTypes from 'prop-types';
import { Text } from "components/Notification/Notification.styled";

export const Notification = ({ message }) => {
    return (
        <Text>{ message}</Text>
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
