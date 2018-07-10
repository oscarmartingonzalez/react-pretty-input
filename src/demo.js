
import React from 'react';
import ReactDOM from 'react-dom';
import { PrettyInputText } from './';
import demoStyle from './css/demo.scss';

const pt = React.createElement(PrettyInputText, { name: 'email', inputValue: 'Email Address', errorValue: 'Invalid Email Address', isRequired: true});

const App = _ => (
    <div className={demoStyle.container}>
        {pt}
        <PrettyInputText name="phone" inputValue="Phone" errorValue="Invalid Phone" />
        <PrettyInputText name="name" inputValue="Name" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('demo-container'));
