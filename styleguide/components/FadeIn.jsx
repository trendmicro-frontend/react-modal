import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        transform: scale(.25);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const FadeIn = styled.div`${({
    delay = 400
}) => css`
    display: inline-block;
    visibility: visible;
    animation: ${fadeIn} ${delay}ms ease-in-out;
    transition: visibility ${delay}ms ease-in-out;
`}`;

FadeIn.propTypes = {
    delay: PropTypes.number
};

export default FadeIn;
