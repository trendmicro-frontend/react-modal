import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button } from '@trendmicro/react-buttons';
import chainedFunction from 'chained-function';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../src';
import ModalDialog from './ModalDialog';
import portal from './portal';

const formBody = (
    <div>
        <div className="form-group">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Email"
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Password"
            />
        </div>
    </div>
);

const warningBody = (
    <div style={{ display: 'flex' }}>
        <i className="fa fa-exclamation-circle fa-4x" style={{ color: '#faca2a' }} />
        <div style={{ marginLeft: 25 }}>
            <label>Unable to export the settings</label>
            <p>The storage space is running out. Select a folder with adequate storage space and try again.</p>
        </div>
    </div>
);

class App extends Component {
    state = {
        modal: {
            name: '',
            params: {}
        }
    };

    openModal = (name = '', params = {}) => {
        this.setState({
            modal: {
                name: name,
                params: params
            }
        });
    };

    updateModalParams = (params = {}) => {
        this.setState(state => ({
            modal: {
                ...state.modal,
                params: {
                    ...state.modal.params,
                    ...params
                }
            }
        }));
    };

    closeModal = () => {
        this.setState({
            modal: {
                name: '',
                params: {}
            }
        });
    };

    render() {
        return (
            <div className="container-fluid text-left">
                {this.state.modal.name &&
                <ModalDialog
                    {...this.state.modal.params}
                    onDelete={() => {
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
                                        onClick={chainedFunction(
                                            onClose,
                                            this.closeModal
                                        )}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        onClick={onClose}
                                    >
                                        No
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        ));
                    }}
                    onSave={this.closeModal}
                    onCancel={this.closeModal}
                />
                }
                <h2>Modal</h2>
                <p>Modal dialogs are used to get a response from a user before other features can be assessed from the main page.</p>
                <p>Use one of these 4 modal sizes depending on your needs and requirements:</p>
                <table className="table table-bordered" style={{ marginBottom: 40 }}>
                    <tbody>
                        <tr>
                            <td className="text-nowrap">Auto</td>
                            <td>400px (minimum width)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Extra Small</td>
                            <td>400px (fixed width) x 240 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Small</td>
                            <td>544px (fixed width) x 304 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Medium</td>
                            <td>688px (fixed width) x 304 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Large</td>
                            <td>928px (fixed width) x 304 px (minimum height)</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Examples</h3>
                <div className="row">
                    <div className="col-sm-6" style={{ marginBottom: 20 }}>
                        <h4>Modal Dialog</h4>
                        <div style={{ marginBottom: 20 }}>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        title: 'Lorem Ipsum',
                                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                    });
                                }}
                            >
                                Auto
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'xs',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Extra Small
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'sm',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Small
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'md',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Medium
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'lg',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Large
                            </Button>
                        </div>
                        <Modal showOverlay={false}>
                            <Modal.Header>
                                <Modal.Title>
                                    Modal Title
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {formBody}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button btnStyle="primary">Save</Button>
                                <Button>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="col-sm-6" style={{ marginBottom: 20 }}>
                        <h4>Modal Dialog (w/o title)</h4>
                        <div style={{ marginBottom: 20 }}>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                    });
                                }}
                            >
                                Auto
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'xs',
                                        body: warningBody
                                    });
                                }}
                            >
                                Extra Small
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'sm',
                                        body: warningBody
                                    });
                                }}
                            >
                                Small
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'md',
                                        body: warningBody
                                    });
                                }}
                            >
                                Medium
                            </Button>
                            <Button
                                onClick={() => {
                                    this.openModal('modal', {
                                        size: 'lg',
                                        body: warningBody
                                    });
                                }}
                            >
                                Large
                            </Button>
                        </div>
                        <Modal showOverlay={false}>
                            <Modal.Body>
                                {warningBody}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button btnStyle="primary">Save</Button>
                                <Button>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
