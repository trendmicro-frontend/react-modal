import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './ModalDialog';

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
            <div>
                {state.modal.name &&
                <ModalDialog state={state} actions={actions} />
                }
                <div className="container-fluid">
                    <div className="row" style={{ marginBottom: 20 }}>
                        <div className="col-sm-12 text-left">
                            <h4>Header</h4>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'lg', title: 'Title' });
                                    }}
                                >
                                    Large
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'md', title: 'Title' });
                                    }}
                                >
                                    Medium
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'sm', title: 'Title' });
                                    }}
                                >
                                    Small
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'xs', title: 'Title' });
                                    }}
                                >
                                    Extra Small
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: 20 }}>
                        <div className="col-sm-12 text-left">
                            <h4>Headerless</h4>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'lg' });
                                    }}
                                >
                                    Large
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'md' });
                                    }}
                                >
                                    Medium
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'sm' });
                                    }}
                                >
                                    Small
                                </Button>
                                <Button
                                    onClick={() => {
                                        actions.openModal('modal', { size: 'xs' });
                                    }}
                                >
                                    Extra Small
                                </Button>
                            </ButtonGroup>
                        </div>
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
