# react-modal [![build status](https://travis-ci.org/trendmicro-frontend/react-modal.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-modal) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-modal/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-modal?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-modal.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-modal/)

React Modal

Demo: https://trendmicro-frontend.github.io/react-modal

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-modal](https://github.com/trendmicro-frontend/react-modal):

  ```
  npm install --save react @trendmicro/react-modal
  ```

2. At this point you can import `@trendmicro/react-buttons` and its styles in your application as follows:

  ```js
  import Component from '@trendmicro/react-modal';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-buttons/dist/react-buttons.css';
  ```

## Usage

```js
import React, { Component, PropTypes } from 'react';
import { Button } from '@trendmicro/react-buttons';
import Modal from '@trendmicro/react-modal';

class ModalDialog extends Component {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object
    };

    render() {
        const { state, actions } = this.props;

        return (
            <Modal
                show={state.showModal}
                size="sm"
                backdrop
                closeButton
                onClose={() => {
                    actions.closeModal();
                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        Modal Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body padding>
                    Modal Body
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        btnStyle="primary"
                        onClick={actions.closeModal}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={actions.closeModal}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
```

## API

### Properties

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
