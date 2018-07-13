
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PrettyInputText } from './';
import demoStyle from './css/demo.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            phoneValue: '044332211',
            nameValue: ''
        }
    }

    render() {
        const pt = React.createElement(PrettyInputText, {
            name: 'email',
            labelText: 'Email Address',
            errorValue: 'Invalid Email Address',
            isRequired: true,
            inputValue: this.state.emailValue,
            onChange: e => this.setState({ emailValue: e.target.value.toString() })
        });
        return (
            <div className={demoStyle.container} style={{width: '100%'}}>
                {pt}
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue={this.state.phoneValue}
                    errorValue="Invalid Phone"
                    labelColor="#fff"
                    backgroundColor='#000'
                    onChange={e => this.setState({ phoneValue: e.target.value.toString() })}
                    onValidation={inputValue => (inputValue.length < 9) ? false : true}
                />
                <PrettyInputText
                    name="name"
                    labelText="Name"
                    inputValue={this.state.nameValue}
                    onChange={e => this.setState({ nameValue: e.target.value.toString() })}
                />
            </div>
        );
    }
}

export default App;

if (typeof RUNENV === 'undefined' || RUNENV !== 'TDD') {
    ReactDOM.render(<App />, document.getElementById('app'));
}
