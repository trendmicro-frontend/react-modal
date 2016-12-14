import React, { Component, PropTypes } from 'react';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import styles from './index.styl';

export default class extends Component {
    static propTypes = {
        ...ModalOverlay.propTypes,
        ...ModalContent.propTypes,
        // Pass 'showOverlay' prop with 'true' value to add an overlay to the background, and 'false' otherwise.
        showOverlay: PropTypes.bool,
        // Specify whether the modal should contain a close button (x).
        showCloseButton: PropTypes.bool
    };
    static defaultProps = {
        ...ModalOverlay.defaultProps,
        ...ModalContent.defaultProps,
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
            closeOnOverlayClick,
            onOpen,
            onClose,
            // ModalContent
            size,
            // Modal
            showOverlay,
            showCloseButton,
            // Others
            ...props
        } = this.props;

        if (!showOverlay) {
            return (
                <ModalContent
                    {...props}
                    size={size}
                    style={{ display: show ? 'block' : 'none' }}
                >
                    {children}
                    {showCloseButton && this.renderCloseButton()}
                </ModalContent>
            );
        }

        return (
            <ModalOverlay
                show={show}
                closeOnOverlayClick={closeOnOverlayClick}
                onOpen={onOpen}
                onClose={onClose}
            >
                <ModalContent
                    {...props}
                    size={size}
                    style={{ // border and boxShadow properties are specified in ModalOverlay
                        border: 'none',
                        boxShadow: 'none'
                    }}
                >
                    {children}
                    {showCloseButton && this.renderCloseButton()}
                </ModalContent>
            </ModalOverlay>
        );
    }
}
