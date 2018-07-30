
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
            expect(generatedProps).to.have.property('isRequired');
            expect(generatedProps).to.have.property('inputValue');
            expect(generatedProps).to.have.property('onChange');
            expect(generatedProps).to.have.property('size');
            expect(generatedProps).to.have.property('isEnabled');
            expect(generatedProps).to.have.property('onKeyPress');
            expect(generatedProps).to.have.property('labelColor');
            expect(generatedProps).to.have.property('backgroundColor');
            expect(generatedProps).to.have.property('width');
        });

        it('Minimal props passed as parameters', () => {
            const component = mount(
                <PrettyInputTextArea
                    name="description"
                    labelText="Description"
                />
            );
            const generatedProps = component.props();
            expect(generatedProps.name).to.equal('description');
            expect(generatedProps.inputValue).to.equal('');
            expect(generatedProps.size).to.equal(50);
            expect(generatedProps.isEnabled).to.equal(true);
            expect(generatedProps.isRequired).to.equal(false);
            expect(generatedProps.onChange).to.equal(null);
            expect(generatedProps.onKeyPress).to.equal(null);
            expect(generatedProps.labelColor).to.equal('#0069ff');
            expect(generatedProps.backgroundColor).to.equal('#fff');
            expect(generatedProps.width).to.equal(200);
        });
    });
});
