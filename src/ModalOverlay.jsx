import cx from 'classnames';
import Portal from '@trendmicro/react-portal';
import PropTypes from 'prop-types';
import React from 'react';
import RootCloseWrapper from './RootCloseWrapper';
import styles from './index.styl';

const ModalOverlay = ({ disableOverlay, onClose, children }) => (
    <Portal className={cx(styles.modalOverlay, styles.centered)}>
        <RootCloseWrapper
            disabled={disableOverlay}
            onRootClose={onClose}
        >
            {children}
        </RootCloseWrapper>
    </Portal>
);

ModalOverlay.propTypes = {
    disableOverlay: PropTypes.bool,
    onClose: PropTypes.func
};

export default ModalOverlay;
