import React, { Component, PropTypes } from 'react';
import ModalOverlay from './ModalOverlay';
import ModalContainer from './ModalContainer';
import styles from './index.styl';

export default class extends Component {
    static propTypes = {
        ...ModalOverlay.propTypes,
        ...ModalContainer.propTypes,
        // Whether to show overlay.
        showOverlay: PropTypes.bool,
        // Specify whether the Component should contain a close button.
        showCloseButton: PropTypes.bool
    };
    static defaultProps = {
        ...ModalOverlay.defaultProps,
        ...ModalContainer.defaultProps,
        showOverlay: true,
        showCloseButton: true
    };

    actions = {
        onClose: (event) => {
            this.props.onClose && this.props.onClose(event);
        }
    };

    renderCloseButton() {
        return (
            <button
                type="button"
                className={styles.close}
                onClick={this.actions.onClose}
            >
                &times;
            </button>
        );
    }
    render() {
        const {
            children,
            // ModalOverlay
            show,
            backdrop,
            onOpen,
            onClose,
            // ModalContainer
            size,
            // Modal
            showOverlay,
            showCloseButton,
            // Others
            ...props
        } = this.props;

        if (!showOverlay) {
            return (
                <ModalContainer {...props} size={size}>
                    {children}
                    {showCloseButton && this.renderCloseButton()}
                </ModalContainer>
            );
        }

        return (
            <ModalOverlay
                show={show}
                backdrop={backdrop}
                onOpen={onOpen}
                onClose={onClose}
            >
                <ModalContainer
                    {...props}
                    size={size}
                    style={{ // border and boxShadow properties are specified in ModalOverlay
                        border: 'none',
                        boxShadow: 'none'
                    }}
                >
                    {children}
                    {showCloseButton && this.renderCloseButton()}
                </ModalContainer>
            </ModalOverlay>
        );
    }
}
