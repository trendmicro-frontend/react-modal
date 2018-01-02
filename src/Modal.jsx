import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import styles from './index.styl';

class Modal extends PureComponent {
    static propTypes = {
        ...ModalOverlay.propTypes,
        ...ModalContent.propTypes,
        // Specify whether to show the modal.
        show: PropTypes.bool,
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
            // ModalOverlay
            show,
            closeOnOverlayClick,
            onOpen,
            onClose,

            // Modal
            showOverlay,
            showCloseButton,

            // ModalContent
            size,
            className,
            style,
            children,
            ...props
        } = this.props;

        if (!showOverlay) {
            return (
                <ModalContent
                    {...props}
                    className={cx(
                        className,
                        { [styles.hasCloseButton]: showCloseButton }
                    )}
                    size={size}
                    style={{
                        display: show ? 'block' : 'none',
                        ...style
                    }}
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
                    className={cx(
                        className,
                        { [styles.hasCloseButton]: showCloseButton }
                    )}
                    size={size}
                    style={{ // border and boxShadow properties are specified in ModalOverlay
                        border: 'none',
                        boxShadow: 'none',
                        ...style
                    }}
                >
                    {children}
                    {showCloseButton && this.renderCloseButton()}
                </ModalContent>
            </ModalOverlay>
        );
    }
}

export default Modal;
