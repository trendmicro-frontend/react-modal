import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

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
        msTransform: 'translate(-50%, -50%)', // IE9
        transform: 'translate(-50%, -50%)'
    }
};

class ModalOverlay extends Component {
    static propTypes = {
        // When 'true' the modal will show itself.
        show: PropTypes.bool,

        // Specify 'static' for a backdrop that doesn't trigger an "onClose" when clicked.
        backdrop: PropTypes.oneOf(['static', true, false]),

        // A callback fired after opening a modal.
        onOpen: PropTypes.func,

        // A callback fired when the header closeButton or non-static backdrop is clicked.
        onClose: PropTypes.func
    };
    static defaultProps = {
        show: true,
        backdrop: 'static',
        onOpen: noop,
        onClose: noop
    };

    render() {
        const {
            show,
            backdrop,
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
            />
        );
    }
}

export default ModalOverlay;
