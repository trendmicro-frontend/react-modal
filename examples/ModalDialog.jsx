import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '@trendmicro/react-buttons';
import Modal from '../src';

class ModalDialog extends Component {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object
    };

    render() {
        const { state, actions } = this.props;
        const { size = 'sm', title, body } = state.modal.params;

        return (
            <Modal
                show
                size={size}
                onClose={actions.closeModal}
            >
                {title &&
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                }
                <Modal.Body>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button btnStyle="primary" onClick={actions.closeModal}>Save</Button>
                    <Button onClick={actions.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDialog;
