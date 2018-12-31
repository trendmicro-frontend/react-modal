import Portal from '@trendmicro/react-portal';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import styles from './index.styl';

const deprecate = ({ deprecatedPropName, remappedPropName }) => {
    if (remappedPropName) {
        console.warn(`Warning: the "${deprecatedPropName}" prop is deprecated. Use "${remappedPropName}" instead.`);
        return;
    }

    console.warn(`Warning: the "${deprecatedPropName}" prop is deprecated.`);
};

/**
 * @example ../styleguide/Modal.md
 */
class Modal extends PureComponent {
    static propTypes = {
        // A callback fired on clicking the overlay or the close button (x).
        onClose: PropTypes.func,

        // Whether the modal is visible.
        show: PropTypes.bool,

        // Whether the close button (x) is visible.
        showCloseButton: PropTypes.bool,

        // Display an overlay in the background. Defaults to `true`.
        showOverlay: PropTypes.bool,

        // Don't close the modal on clicking the overlay. Defaults to `false`.
        disableOverlayClick: PropTypes.bool,

        // className to assign to modal overlay.
        overlayClassName: PropTypes.string,

        // style to assign to modal overlay.
        overlayStyle: PropTypes.object,

        // Extra Small: W400 x H240 px (minimum height)
        // Small:       W544 x H304 px (minimum height)
        // Medium:      W688 x H304 px (minimum height)
        // Large:       W928 x H304 px (minimum height)
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

    static defaultProps = {
        disableOverlayClick: false,
        show: true,
        showCloseButton: true,
        showOverlay: true,
        size: ''
    };

    handleClose = (event) => {
        if (typeof this.props.onClose === 'function') {
            this.props.onClose(event);
        }
    };

    renderCloseButton() {
        return (
            <button
                type="button"
                className={styles.close}
                onClick={this.handleClose}
            />
        );
    }

    renderModalContent({ showCloseButton, size, className, children, ...props }) {
        return (
            <ModalContent
                {...props}
                className={cx(className, {
                    [styles.closeButton]: showCloseButton
                })}
                size={size}
            >
                {children}
                {showCloseButton && this.renderCloseButton()}
            </ModalContent>
        );
    }

    render() {
        let {
            onClose,
            show,
            showCloseButton,
            showOverlay,
            disableOverlay, // deprecated prop
            disableOverlayClick,
            overlayClassName,
            overlayStyle,
            size,
            ...props
        } = this.props;

        if (disableOverlay !== undefined) {
            deprecate({
                deprecatedPropName: 'disableOverlay',
                remappedPropName: 'disableOverlayClick',
            });

            if (disableOverlay && disableOverlayClick === false) {
                disableOverlayClick = true;
            }
        }

        if (!show) {
            return null;
        }

        const modalContent = this.renderModalContent({
            showCloseButton,
            size,
            ...props
        });

        if (!showOverlay) {
            return modalContent;
        }

        return (
            <Portal>
                <ModalOverlay
                    className={overlayClassName}
                    style={overlayStyle}
                    disableOverlayClick={disableOverlayClick}
                    onClose={onClose}
                >
                    {modalContent}
                </ModalOverlay>
            </Portal>
        );
    }
}

export default Modal;
