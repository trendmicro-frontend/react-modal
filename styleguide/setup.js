/* eslint-disable */
import '@trendmicro/react-buttons/dist/react-buttons.css';

import styled from 'styled-components';
import React, { Fragment } from 'react';
import { Button } from '@trendmicro/react-buttons';
import FadeIn from './components/FadeIn';
import FadeOut from './components/FadeOut';
import FormGroup from './components/FormGroup';
import Input from './components/Input';
import Label from './components/Label';
import Modal from '../src';
import portal from './portal';

global.Fragment = Fragment;
global.Button = Button;
global.FadeIn = FadeIn;
global.FadeOut = FadeOut;
global.FormGroup = FormGroup;
global.Input = Input;
global.Label = Label;
global.Modal = Modal;
global.portal = portal;
