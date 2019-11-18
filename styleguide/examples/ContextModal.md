### Using ModalProvider and ModalConsumer

```jsx
const MyModal = ({ onClose, ...props }) => (
    <Modal onClose={onClose}>
        <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);

<Fragment>
    <FormGroup>
        <ModalProvider>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider disableOverlayClick={true}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with disable overlay click
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showCloseButton={false}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with not show close button
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showOverlay={false}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with not show overlay
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
</Fragment>
```

#### Nested modals

```jsx
const DeleteModal = ({ onClose }) => (
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
);

<Fragment>
    <FormGroup>
        <ModalProvider disableOverlayClick={true}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const MyModal = ({ onClose, ...props }) => (
                        <Modal onClose={onClose}>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={onClose}>
                                    Close
                                </Button>
                                <Button
                                    btnStyle="danger"
                                    onClick={() => {
                                        openModal(DeleteModal);
                                    }}
                                >
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    );
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with disable overlay click
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showCloseButton={false}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const MyModal = ({ onClose, ...props }) => (
                        <Modal onClose={onClose}>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={onClose}>
                                    Close
                                </Button>
                                <Button
                                    btnStyle="danger"
                                    onClick={() => {
                                        openModal(DeleteModal);
                                    }}
                                >
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    );
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with not show close button
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showOverlay={false}>
            <ModalRoot />
            <ModalConsumer>
                {({ openModal }) => {
                    const MyModal = ({ onClose, ...props }) => (
                        <Modal onClose={onClose}>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={onClose}>
                                    Close
                                </Button>
                                <Button
                                    btnStyle="danger"
                                    onClick={() => {
                                        openModal(DeleteModal);
                                    }}
                                >
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    );
                    const handleClick = (e) => openModal(MyModal);
                    return (
                        <button type="button" onClick={handleClick}>
                            Open Modal with not show overlay
                        </button>
                    );
                }}
            </ModalConsumer>
        </ModalProvider>
    </FormGroup>
</Fragment>
```

### Using the useModal hook

```jsx
const MyModal = ({ onClose, ...props }) => (
    <Modal onClose={onClose}>
        <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);

const Child = (props) => {
    const { openModal } = useModal();
    const handleClick = (e) => openModal(MyModal);

    return (
        <button type="button" onClick={handleClick}>
            {props.children}
        </button>
    );
}

<Fragment>
    <FormGroup>
        <ModalProvider>
            <ModalRoot />
            <Child>Open Modal</Child>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider disableOverlayClick={true}>
            <ModalRoot />
            <Child>Open Modal with disable overlay click</Child>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showCloseButton={false}>
            <ModalRoot />
            <Child>Open Modal with not show close button</Child>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showOverlay={false}>
            <ModalRoot />
            <Child>Open Modal with not show overlay</Child>
        </ModalProvider>
    </FormGroup>
</Fragment>
```

#### Nested modals

```jsx
const MyModal = ({ onClose, ...props }) => {
    const { openModal } = useModal();
    return (
        <Modal onClose={onClose}>
            <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>
                    Close
                </Button>
                <Button
                    btnStyle="danger"
                    onClick={() => {
                        openModal(({ onClose }) => (
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
    );
};

const Child = (props) => {
    const { openModal } = useModal();
    const handleClick = (e) => openModal(MyModal);

    return (
        <button type="button" onClick={handleClick}>
            {props.children}
        </button>
    );
}

<Fragment>
    <FormGroup>
        <ModalProvider disableOverlayClick={true}>
            <ModalRoot />
            <Child>Open Modal with disable overlay click</Child>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showCloseButton={false}>
            <ModalRoot />
            <Child>Open Modal with not show close button</Child>
        </ModalProvider>
    </FormGroup>
    <FormGroup>
        <ModalProvider showOverlay={false}>
            <ModalRoot />
            <Child>Open Modal with not show overlay</Child>
        </ModalProvider>
    </FormGroup>
</Fragment>
```
