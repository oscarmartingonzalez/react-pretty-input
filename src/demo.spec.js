
import React from 'react';
import App from './demo';
import { PrettyInputText } from './';

describe('Demo App Component', () => {
    let component;

    beforeEach(() => {
        component = mount(<App />);
    });

    it('renders the demo wrapper', () => {
        expect(component.find(PrettyInputText)).to.have.length(3);
        expect(component.find('input')).to.have.length(3);
    });
});
