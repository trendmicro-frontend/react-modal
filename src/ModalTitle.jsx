import React from 'react';
import styles from './index.styl';

const ModalTitle = (props) => {
    return (
        <div
            {...props}
            className={styles.modalTitle}
        />
    );
};

export default ModalTitle;
