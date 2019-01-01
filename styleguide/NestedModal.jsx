import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import Modal from '../src';
import portal from './portal';

export default ({ size, onClose }) => (
    <Modal
        size={size}
        onClose={onClose}
    >
        <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
            <Button
                btnStyle="danger"
                className="pull-left"
                onClick={() => {
                    portal(({ onClose }) => (
                        <Modal onClose={onClose} title="2nd">
                            <Modal.Header>
                                Delete
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to delete this item?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    btnStyle="danger"
                                    onClick={onClose}
                                >
                                    Yes
                                </Button>
                                <Button
                                    btnStyle="flat"
                                    onClick={onClose}
                                >
                                    No
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ));
                }}
            >
                Delete
            </Button>
            <Button
                onClick={onClose}
            >
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);
