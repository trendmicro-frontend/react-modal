import React from 'react';
import { mount } from 'enzyme';
import { test } from 'tap';
import '../setupTests';
import Modal from '../src';

test('<Modal />', (t) => {
    const wrapper = mount((
        <Modal>
            <Modal.Header>
                <Modal.Title>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    ));
    t.equal(wrapper.find(Modal).length, 1, 'should render <Modal /> component');
    t.end();
});
