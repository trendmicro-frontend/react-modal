import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.styl';

const ModalContent = (props) => {
    const { className, size, ...others } = props;

    return (
        <div
            {...others}
            className={classNames(
                className,
                styles.modalContent,
                styles[size]
            )}
        />
    );
};

ModalContent.propTypes = {
    // Extra Small: W400 x H240 px (minimum height)
    // Small:       W544 x H304 px (minimum height)
    // Medium:      W688 x H304 px (minimum height)
    // Large:       W928 x H304 px (minimum height)
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

ModalContent.defaultProps = {
    size: 'xs'
};

export default ModalContent;
