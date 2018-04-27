import React from 'react';
import {render} from 'react-dom';
import App from './app';
import { Roles } from './roles';
import { Sex } from './sex';

render(
    <App name="Murat" surname="Çatal" role={Roles.RW} sex={Sex.Male}/>, document.getElementById('root'));
