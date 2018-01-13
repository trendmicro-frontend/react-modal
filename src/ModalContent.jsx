import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.styl';

const ModalContent = ({ className, size, ...props }) => (
    <div
        {...props}
        className={cx(
            className,
            styles.modalContent,
            styles[size]
        )}
    />
);

ModalContent.propTypes = {
    size: PropTypes.oneOf([
        '',
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

export default ModalContent;
