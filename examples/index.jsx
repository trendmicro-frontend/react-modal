import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button } from '@trendmicro/react-buttons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../src';
import ModalDialog from './ModalDialog';

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

    actions = {
        openModal: (name = '', params = {}) => {
            this.setState({
                modal: {
                    name: name,
                    params: params
                }
            });
        },
        updateModalParams: (params = {}) => {
            this.setState({
                modal: {
                    ...this.state.modal,
                    params: {
                        ...this.state.modal.params,
                        ...params
                    }
                }
            });
        },
        closeModal: () => {
            this.setState({
                modal: {
                    name: '',
                    params: {}
                }
            });
        }
    };

    render() {
        const state = { ...this.state };
        const actions = { ...this.actions };

        return (
            <div className="container-fluid text-left">
                {state.modal.name &&
                <ModalDialog state={state} actions={actions} />
                }
                <h2>Modal</h2>
                <p>Modal dialogs are used to get a response from a user before other features can be assessed from the main page.</p>
                <p>Use one of these 4 modal sizes depending on your needs and requirements:</p>
                <table className="table table-bordered" style={{ marginBottom: 40 }}>
                    <tbody>
                        <tr>
                            <td className="text-nowrap">Extra small</td>
                            <td>W400 x H240 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Small</td>
                            <td>W544 x H304 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Medium</td>
                            <td>W688 x H304 px (minimum height)</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">Large</td>
                            <td>W928 x H304 px (minimum height)</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Examples</h3>
                <div className="row">
                    <div className="col-sm-6" style={{ marginBottom: 20 }}>
                        <h4>Modal dialog w/ title</h4>
                        <div style={{ marginBottom: 20 }}>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'xs',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Extra Small Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'sm',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Small Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'md',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Medium Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'lg',
                                        title: 'Modal Title',
                                        body: formBody
                                    });
                                }}
                            >
                                Large Modal
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
                        <h4>Modal dialog w/o title</h4>
                        <div style={{ marginBottom: 20 }}>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'xs',
                                        body: warningBody
                                    });
                                }}
                            >
                                Extra Small Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'sm',
                                        body: warningBody
                                    });
                                }}
                            >
                                Small Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'md',
                                        body: warningBody
                                    });
                                }}
                            >
                                Medium Modal
                            </Button>
                            <Button
                                onClick={() => {
                                    actions.openModal('modal', {
                                        size: 'lg',
                                        body: warningBody
                                    });
                                }}
                            >
                                Large Modal
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
