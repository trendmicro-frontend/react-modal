import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }
    to {
        transform: scale(.25);
        opacity: 0;
    }
`;

const FadeOut = styled.div`${({
    delay = 400
}) => css`
    display: inline-block;
    visibility: hidden;
    animation: ${fadeOut} ${delay}ms ease-in-out;
    transition: visibility ${delay}ms ease-in-out;
`}`;

FadeOut.propTypes = {
    delay: PropTypes.number
};

export default FadeOut;
