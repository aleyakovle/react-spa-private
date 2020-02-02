/* eslint-env browser */
import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const rootEl = document.getElementById('root');

render(<App />, rootEl);
