
import React from 'react';
import App from './demo';
import { PrettyInputText } from './';

describe('App Component', () => {
    it('renders the demo wrapper', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(PrettyInputText)).to.have.length(3);
        expect(wrapper.find('input')).to.have.length(3);
        let expectedProps;

        // PrettyInputText[0]
        expectedProps = {
            name: 'email',
            labelText: 'Email Address',
            errorValue: 'Invalid Email Address',
            isRequired: true,
            inputValue: '',
            onChange: e => {},
            size: 50,
            isEnabled: true,
            onValidation: e => true,
            onKeyPress: null,
            labelColor: '#0069ff',
            backgroundColor: '#fff',
            width: 200
        };
        //console.log(wrapper.find(PrettyInputText).at(0).props());
        const generatedProps = wrapper.find(PrettyInputText).at(0).props();
        for (let prop in generatedProps) {
            if (typeof expectedProps[prop] !== 'function') {
                expect(generatedProps[prop]).to.equal(expectedProps[prop]);
            }
        }
    });
});
