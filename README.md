# react-modal [![build status](https://travis-ci.org/trendmicro-frontend/react-modal.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-modal) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-modal/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-modal?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-modal.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-modal/)

React Modal

Demo: https://trendmicro-frontend.github.io/react-modal

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-modal](https://github.com/trendmicro-frontend/react-modal):

  ```
  npm install --save react @trendmicro/react-modal
  ```

2. At this point you can import `@trendmicro/react-modal` and its styles in your application as follows:

  ```js
  import Component from '@trendmicro/react-modal';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-modal/dist/react-modal.css';
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
                onClose={actions.closeModal}
            >
                <Modal.Header>
                    <Modal.Title>
                        Modal Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body padding={true}>
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
      <td>show</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Specify whether to show the modal.</td>
    </tr>
    <tr>
      <td>showOverlay</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Pass 'showOverlay' prop with 'true' value to add an overlay to the background, and 'false' otherwise.</td>
    </tr>
    <tr>
      <td>showCloseButton</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Specify whether the modal should contain a close button (x).</td>
    </tr>
    <tr>
      <td>closeOnOverlayClick</td>
      <td>Boolean</td>
      <td>true</td>
      <td>By default the modal is closed when clicking the overlay area. You can pass 'closeOnOverlayClick' prop with 'false' value if you want to prevent this behavior.</td>
    </tr>
    <tr>
      <td>onOpen</td>
      <td>Function</td>
      <td></td>
      <td>A callback fired after opening a modal.</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>Function</td>
      <td></td>
      <td>A callback fired when clicking the close button (x) or the overlay area.</td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td>'xs'</td>
      <td>
          <ul>
              <li>Extra Small (400px x 240px): 'xs' or 'extra-small'</li>
              <li>Small (544px x 304px): 'sm' or 'small'</li>
              <li>Medium (688px x 304px): 'md' or 'medium'</li>
              <li>Large (928px x 304px): 'lg' or 'large'</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
