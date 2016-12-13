import React, { Component } from 'react';
import styles from './index.styl';

class ModalTitle extends Component {
    render() {
        return (
            <div
                {...this.props}
                className={styles.modalTitle}
            />
        );
    }
}

export default ModalTitle;
