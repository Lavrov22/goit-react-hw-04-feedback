import PropTypes from 'prop-types';
import { Wrapper } from "components/Section/Section.styled";

export const Section = ({ title, children }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            {children}
        </Wrapper>)
   
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}