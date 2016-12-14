import classNames from 'classnames';
import React, { PropTypes } from 'react';
import styles from './index.styl';

const ModalContainer = (props) => {
    const { className, size, ...others } = props;

    return (
        <div
            {...others}
            className={classNames(
                className,
                styles.modal,
                styles[size]
            )}
        />
    );
};

ModalContainer.propTypes = {
    // Extra Small: w400 x h240 px (minimum height)
    // Small:       w544 x h304 px (minimum height)
    // Medium:      w688 x h304 px (minimum height)
    // Large:       w928 x h304 px (minimum height)
    size: PropTypes.oneOf([
        'xs',
        'sm',
        'md',
        'lg',
        'large',
        'medium',
        'small',
        'extra-small'
    ])
};

ModalContainer.defaultProps = {
    size: 'xs'
};

export default ModalContainer;
