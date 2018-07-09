
import React from 'react';
import ReactDOM from 'react-dom';
import { PrettyInputText } from './';
import demoStyle from './css/demo.scss';

const App = _ => (
    <div className={demoStyle.container}>
        <PrettyInputText name="email" inputValue="Email Address" errorValue="Invalid Email Address" isRequired />
        <PrettyInputText name="name" inputValue="Name" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('demo-container'));
