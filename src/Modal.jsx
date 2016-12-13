import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import styles from './index.styl';

const noop = () => {};

// https://github.com/reactjs/react-modal
// Styles are passed as an object with 2 keys, 'overlay' and 'content' like so
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(51, 51, 51, .55)',
        zIndex: 100
    },
    content: {
        boxShadow: '0 4px 16px rgba(0, 0, 0, .5)',
        border: '1px solid #ccc',
        borderRadius: 0,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: 0,
        msTransform: 'translate(-50%, -50%)',   /* IE 9 */
        transform: 'translate(-50%, -50%)'
    }
};

export default class extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),

        // When 'true' the modal will show itself.
        show: PropTypes.bool,

        // Specify 'static' for a backdrop that doesn't trigger an "onClose" when clicked.
        backdrop: PropTypes.oneOf(['static', true, false]),

        // Specify whether the Component should contain a close button.
        closeButton: PropTypes.bool,

        // A callback fired after opening a modal.
        onOpen: PropTypes.func,

        // A callback fired when the header closeButton or non-static backdrop is clicked.
        onClose: PropTypes.func
    };
    static defaultProps = {
        size: 'xs',
        show: true,
        backdrop: 'static',
        closeButton: true,
        onOpen: noop,
        onClose: noop
    };

    actions = {
        onClose: (event) => {
            this.props.onClose && this.props.onClose(event);
        }
    };

    render() {
        const {
            children,
            size,
            show,
            backdrop,
            closeButton,
            onOpen,
            onClose,
            ...props
        } = this.props;

        return (
            <Modal
                {...props}
                isOpen={show}
                onAfterOpen={onOpen}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick={backdrop === true}
                style={customStyles}
                contentLabel="Modal"
            >
                <div
                    className={classNames(
                        styles.modal,
                        styles[size]
                    )}
                >
                    {children}
                    {closeButton &&
                        <button
                            type="button"
                            className={styles.close}
                            onClick={this.actions.onClose}
                        >
                            &times;
                        </button>
                    }
                </div>
            </Modal>
        );
    }
}
