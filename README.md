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
  import Modal from '@trendmicro/react-modal';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-modal/dist/react-modal.css';
  ```
  
## Recommended Setup

Create a common components directory including both `Buttons` and `Modal` components, as shown below:
```
components/
  Buttons/
    index.js
  Modal/
    index.js
```

**components/Buttons/index.js**
```js
import '@trendmicro/react-buttons/dist/react-buttons.css';

export { Button, ButtonGroup, ButtonToolbar } from '@trendmicro/react-buttons';
```

**components/Modal/index.js**
```js
import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';

export default Modal;
```

Then, import `Modal` component in your code:
```js
import Modal from './components/Modal';
```

## Usage

```js
import React, { Component, PropTypes } from 'react';
import { Button } from './components/Buttons';
import Modal from './components/Modal';

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

## Examples

### Prevent Body From Scrolling

You can create a ModalWrapper component that changes the body style on open and close.

```js
import React, { Component } from 'react';
import Modal from '@trendmicro/react-modal';
import '@trendmicro/react-modal/dist/react-modal.css';

class ModalWrapper extends Component {
    static propTypes = {
        ...Modal.propTypes
    };
    static defaultProps = {
        ...Modal.defaultProps
    };

    bodyStyle = null;

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.props.show) {
            if (nextProps.show) {
                this.changeBodyStyle();
            } else {
                this.restoreBodyStyle();
            }
        }
    }
    componentWillUnmount() {
        this.restoreBodyStyle();
    }
    changeBodyStyle() {
        if (this.bodyStyle) {
            return;
        }
        // Prevent body from scrolling when a modal is opened
        const body = document.querySelector('body');
        this.bodyStyle = {
            overflowY: body.style.overflowY
        };
        body.style.overflowY = 'hidden';
    }
    restoreBodyStyle() {
        if (this.bodyStyle) {
            const body = document.querySelector('body');
            body.style.overflowY = this.bodyStyle.overflowY;
            this.bodyStyle = null;
        }
    }
    render() {
        const { onOpen, onClose, ...props } = this.props;

        return (
            <Modal
                {...props}
                onOpen={() => {
                    this.changeBodyStyle();
                    onOpen();
                }}
                onClose={() => {
                    this.restoreBodyStyle();
                    onClose();
                }}
            />
        );
    }
}

ModalWrapper.Overlay = Modal.Overlay;
ModalWrapper.Content = Modal.Content;
ModalWrapper.Header = Modal.Header;
ModalWrapper.Title = Modal.Title;
ModalWrapper.Body = Modal.Body;
ModalWrapper.Footer = Modal.Footer;

export default ModalWrapper;
```

## API

### Properties

Name | Type | Default | Description
:--- | :--- | :------ | :----------
closeOnOverlayClick | Boolean | true | By default the modal is closed when clicking the overlay area. You can pass 'closeOnOverlayClick' prop with 'false' value if you want to prevent this behavior.
onClose | Function | | A callback fired when clicking the close button (&times;) or the overlay area.
onOpen | Function | | A callback fired after opening a modal.
show | Boolean | true | Specify whether to show the modal.
showCloseButton | Boolean | true | Specify whether the modal should contain a close button (x).
showOverlay | Boolean | true | Pass 'showOverlay' prop with 'true' value to add an overlay to the background, and 'false' otherwise.
size | String | '' | One of: 'xs', 'sm', 'md', 'lg', 'extra-small', 'small', 'medium', 'large', or an empty string. Defaults to empty string that will automatically resize to fit contents.

### Size

Size | Dimension
:--- | :--------
Auto | 400px (minimum width)
Extra Small | 400px (fixed width) x 240 px (minimum height)
Small | 544px (fixed width) x 304 px (minimum height)
Medium | 688px (fixed width) x 304 px (minimum height)
Large | 928px (fixed width) x 304 px (minimum height)

## License

MIT
