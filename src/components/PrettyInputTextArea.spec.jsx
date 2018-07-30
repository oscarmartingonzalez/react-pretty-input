
import React from 'react';
import { PrettyInputTextArea } from '..';

describe('<PrettyInputTextArea />', () => {
    beforeEach(() => {

    });

    describe('Props', () => {
        it('Default props', () => {
            const component = mount(
                <PrettyInputTextArea
                    name="description"
                    labelText="Description"
                />
            );
            const generatedProps = component.props();
            expect(generatedProps).to.have.property('name');
            expect(generatedProps).to.have.property('labelText');
            expect(generatedProps).to.have.property('errorValue');
            expect(generatedProps).to.have.property('isRequired');
            expect(generatedProps).to.have.property('inputValue');
            expect(generatedProps).to.have.property('onChange');
            expect(generatedProps).to.have.property('size');
            expect(generatedProps).to.have.property('isEnabled');
            expect(generatedProps).to.have.property('onValidation');
            expect(generatedProps).to.have.property('onKeyPress');
            expect(generatedProps).to.have.property('labelColor');
            expect(generatedProps).to.have.property('backgroundColor');
            expect(generatedProps).to.have.property('width');
        });
    });
});
