/* eslint-disable */
import '@trendmicro/react-buttons/dist/react-buttons.css';

import React, { Fragment } from 'react';
import { Button } from '@trendmicro/react-buttons';
import Modal from '../src';
import portal from './portal';

global.Fragment = Fragment;
global.Button = Button;
global.Modal = Modal;
global.portal = portal;
