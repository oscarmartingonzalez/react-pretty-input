
import React from 'react';
import { PrettyInputText } from '../';

describe('<PrettyInputText />', () => {

    beforeEach(() => {

    });

    describe('Props', () => {
        it('Default props', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
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

        it('Minimal props passed as parameters', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                />
            );
            const generatedProps = component.props();
            expect(generatedProps.name).to.equal('phone');
            expect(generatedProps.inputValue).to.equal('');
            expect(generatedProps.errorValue).to.equal('Error');
            expect(generatedProps.size).to.equal(50);
            expect(generatedProps.isEnabled).to.equal(true);
            expect(generatedProps.isRequired).to.equal(false);
            expect(generatedProps.onValidation).to.be.function();
            expect(generatedProps.onChange).to.equal(null);
            expect(generatedProps.onKeyPress).to.equal(null);
            expect(generatedProps.labelColor).to.equal('#0069ff');
            expect(generatedProps.backgroundColor).to.equal('#fff');
            expect(generatedProps.width).to.equal(200);
        });

        it('All props passed as parameters', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue="950950950"
                    errorValue="Invalid phone"
                    size={100}
                    isEnabled={false}
                    isRequired={true}
                    onValidation={inputValue => (inputValue.length < 2) ? false : true}
                    onChange={e => { }}
                    onKeyPress={e => { }}
                    labelColor='#d48'
                    backgroundColor='#000'
                    width={100}
                />
            );
            const generatedProps = component.props();
            expect(generatedProps.name).to.equal('phone');
            expect(generatedProps.labelText).to.equal('Phone');
            expect(generatedProps.inputValue).to.equal('950950950');
            expect(generatedProps.errorValue).to.equal('Invalid phone');
            expect(generatedProps.size).to.equal(100);
            expect(generatedProps.isEnabled).to.equal(false);
            expect(generatedProps.isRequired).to.equal(true);
            expect(generatedProps.onValidation).to.be.function();
            expect(generatedProps.onChange).to.be.function();
            expect(generatedProps.onKeyPress).to.be.function();
            expect(generatedProps.labelColor).to.equal('#d48');
            expect(generatedProps.backgroundColor).to.equal('#000');
            expect(generatedProps.width).to.equal(100);
        });

    });
});
