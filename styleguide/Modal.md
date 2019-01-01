### Modal components

```jsx
<Modal showOverlay={false}>
    <Modal.Header>
        <Modal.Title>
            Modal title
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
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

const openModal = (props) => (event) => {
    const { size } = { ...props };

    portal(({ onClose }) => (
        <Modal size={size} onClose={onClose}>
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
        onClick={openModal()}
    >
        Auto
    </Button>
    <Button
        btnStyle="primary"
        onClick={openModal({ size: 'xs' })}
    >
        Extra Small
    </Button>
    <Button
        btnStyle="primary"
        onClick={openModal({ size: 'sm' })}
    >
        Small
    </Button>
    <Button
        btnStyle="primary"
        onClick={openModal({ size: 'md' })}
    >
        Medium
    </Button>
    <Button
        btnStyle="primary"
        onClick={openModal({ size: 'lg' })}
    >
        Large
    </Button>
</Fragment>
```

### Nested modals

```jsx
const openNestedModals = (props) => (event) => {
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
    onClick={openNestedModals()}
>
    Launch Modal
</Button>
```
