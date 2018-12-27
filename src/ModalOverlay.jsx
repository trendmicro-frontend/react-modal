import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.styl';

const isModifiedEvent = (event) => {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

const isLeftClickEvent = (event) => {
    return event.button === 0;
};

class ModalOverlay extends PureComponent {
    static propTypes = {
        disableOverlay: PropTypes.bool,
        onClose: PropTypes.func
    };

    node = null;

    handleClick = (event) => {
        const { disableOverlay, onClose } = this.props;

        if (disableOverlay) {
            return;
        }

        const isOverlayTarget = (event.target === this.node);
        const canClose = !isModifiedEvent(event) && isLeftClickEvent(event) && isOverlayTarget;

        if (canClose && (typeof onClose === 'function')) {
            onClose(event);
        }
    };

    render() {
        const {
            disableOverlay, // eslint-disable-line
            onClose, // eslint-disable-line
            className,
            ...props
        } = this.props;

        return (
            <div
                ref={c => {
                    if (!c) {
                        this.node = null;
                        return;
                    }
                    this.node = ReactDOM.findDOMNode(c);
                }}
                {...props}
                role="presentation"
                className={cx(className, styles.modalOverlay, styles.centered)}
                onClick={this.handleClick}
            >
                {this.props.children}
            </div>
        );
    }
}

export default ModalOverlay;
