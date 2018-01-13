import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '@trendmicro/react-buttons';
import Modal from '../src';

class ModalDialog extends Component {
    static propTypes = {
        title: PropTypes.any,
        body: PropTypes.any,
        onSave: PropTypes.func,
        onCancel: PropTypes.func
    };

    render() {
        const { title, body, onSave, onCancel, ...props } = this.props;

        return (
            <Modal
                {...props}
                disableOverlay={false}
                onClose={onCancel}
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
                    <Button btnStyle="primary" onClick={onSave}>Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDialog;
