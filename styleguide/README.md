```jsx
<Modal showOverlay={false}>
    <Modal.Header>
        <Modal.Title>
            Modal title
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <FormGroup>
            <Label>Email address</Label>
            <Input
                type="email"
                placeholder="Email"
            />
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input
                type="password"
                placeholder="Password"
            />
        </FormGroup>
    </Modal.Body>
    <Modal.Footer>
        <Button>Cancel</Button>
        <Button btnStyle="primary">Save</Button>
    </Modal.Footer>
</Modal>
```

```jsx
<Modal showOverlay={false}>
    <Modal.Body>
        <div style={{ display: 'flex' }}>
            <i className="fas fa-exclamation-circle fa-4x" style={{ color: '#faca2a' }} />
            <div style={{ marginLeft: 25 }}>
                <label>Unable to export the settings</label>
                <p>The storage space is running out. Select a folder with adequate storage space and try again.</p>
            </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button>Cancel</Button>
        <Button btnStyle="primary">Done</Button>
    </Modal.Footer>
</Modal>
```

### Sizes

```jsx
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const launchModal = ({ size, ...props }) => (event) => {
    portal(({ onClose }) => (
        <Modal {...props} size={size} onClose={onClose}>
            <Modal.Body>
                {loremIpsum}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    ));
};

<Fragment>
    <Button
        btnStyle="primary"
        onClick={launchModal({
            style: { margin: '10px 20px' }
        })}
    >
        Launch modal
    </Button>
    <Button
        btnStyle="primary"
        onClick={launchModal({ size: 'xs' })}
    >
        Extra small modal
    </Button>
    <Button
        btnStyle="primary"
        onClick={launchModal({ size: 'sm' })}
    >
        Small modal
    </Button>
    <Button
        btnStyle="primary"
        onClick={launchModal({ size: 'md' })}
    >
        Medium modal
    </Button>
    <Button
        btnStyle="primary"
        onClick={launchModal({ size: 'lg' })}
    >
        Large modal
    </Button>
</Fragment>
```

### Disable overlay click

```jsx
const launchModal = () => {
    portal(({ onClose }) => (
        <Modal
            disableOverlayClick
            onClose={onClose}
        >
            <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    ));
};

<Button
    btnStyle="primary"
    onClick={launchModal}
>
    Launch modal
</Button>
```

### Nested modals

```jsx
const launchModal = (event) => {
    portal(({ onClose }) => (
        <Modal onClose={onClose}>
            <Modal.Header>
                <Modal.Title>
                    Modal title
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    btnStyle="danger"
                    onClick={() => {
                        portal(({ onClose }) => (
                            <Modal onClose={onClose}>
                                <Modal.Header>
                                    <Modal.Title>
                                        Delete item
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to delete this item?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        btnStyle="flat"
                                        onClick={onClose}
                                    >
                                        No
                                    </Button>
                                    <Button
                                        btnStyle="danger"
                                        onClick={onClose}
                                    >
                                        Yes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        ));
                    }}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    ));
};

<Button
    btnStyle="primary"
    onClick={launchModal}
>
    Launch modal
</Button>
```
