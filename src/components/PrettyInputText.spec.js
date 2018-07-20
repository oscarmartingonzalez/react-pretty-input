
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

    describe('Input text', () => {

        let spiedHandleOnKeyPress;
        let spiedHandleTextInputChange;
        let spiedGetDerivedStateFromProps;
        let rndValue;
        let onKeyPressValue;
        let onKeyPressCallback;
        let onKeyPressCallbackCallsCount;

        beforeEach(() => {
            spiedHandleOnKeyPress = sinon.spy(PrettyInputText.prototype, 'handleOnKeyPress');
            spiedHandleTextInputChange = sinon.spy(PrettyInputText.prototype, 'handleTextInputChange');
            spiedGetDerivedStateFromProps = sinon.spy(PrettyInputText, 'getDerivedStateFromProps');
            rndValue = Math.random();
            onKeyPressValue = 0;
            onKeyPressCallbackCallsCount = 0;
            onKeyPressCallback = e => {
                onKeyPressCallbackCallsCount += 1;
                onKeyPressValue = rndValue;
            };
        });

        afterEach(function () {
            spiedHandleOnKeyPress.restore();
            spiedHandleTextInputChange.restore();
            spiedGetDerivedStateFromProps.restore();
        });

        it('onChange event', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue="950950950"
                    errorValue="Invalid phone"
                    size={100}
                    isEnabled={true}
                    isRequired={true}
                    onValidation={inputValue => (inputValue.length < 2) ? false : true}
                    onChange={e => { }}
                    onKeyPress={e => { }}
                    labelColor='#d48'
                    backgroundColor='#000'
                    width={100}
                />
            );
            expect(PrettyInputText.getDerivedStateFromProps.calledOnce).to.equal(true);
            expect(PrettyInputText.prototype.handleTextInputChange.notCalled).to.equal(true);
            expect(component.state().inputActivated).to.equal(false);

            const inputTag = component.find('input').at(0);

            inputTag.simulate('focus');
            expect(component.props().inputValue).to.equal('950950950');
            expect(component.state().labelShow).to.equal(true);
            expect(component.state().inputActivated).to.equal(true);
            expect(component.state().errorActivated).to.equal(false);

            inputTag.simulate('change', { target: { value: '' } });
            expect(PrettyInputText.prototype.handleTextInputChange.calledOnce).to.equal(true);
            expect(component.state().inputActivated).to.equal(true);
            expect(component.state().errorActivated).to.equal(true);
            component.setProps({ inputValue: '' });
            expect(component.props().inputValue).to.equal('');
            expect(component.state().labelShow).to.equal(false);

            inputTag.simulate('blur');
            expect(component.state().inputActivated).to.equal(false);
            expect(component.state().errorActivated).to.equal(true);

            inputTag.simulate('focus');
            component.setProps({ inputValue: '950950950' });
            inputTag.simulate('change', { target: { value: '950950950' } });
            expect(component.state().inputActivated).to.equal(true);
            expect(component.state().errorActivated).to.equal(false);

            inputTag.simulate('blur');
            expect(component.state().inputActivated).to.equal(false);
            expect(component.state().errorActivated).to.equal(false);
        });

        it('onKeyPress event on string component', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue="950950950"
                    errorValue="Invalid phone"
                    size={100}
                    isEnabled={true}
                    isRequired={true}
                    onValidation={inputValue => (inputValue.length < 2) ? false : true}
                    onChange={e => { }}
                    onKeyPress={onKeyPressCallback}
                    labelColor='#d48'
                    backgroundColor='#000'
                    width={100}
                />
            );
            expect(onKeyPressCallbackCallsCount).to.equal(0);
            expect(PrettyInputText.getDerivedStateFromProps.calledOnce).to.equal(true);
            expect(PrettyInputText.prototype.handleOnKeyPress.notCalled).to.equal(true);

            const inputTag = component.find('input').at(0);

            inputTag.simulate('focus');
            inputTag.simulate('keypress', { keyCode: 63 });
            expect(onKeyPressCallbackCallsCount).to.equal(1);
            expect(PrettyInputText.prototype.handleOnKeyPress.calledOnce).to.equal(true);
            expect(rndValue).to.not.equal(onKeyPressValue.toString());
            inputTag.simulate('keypress', { keyCode: 53 });
            expect(onKeyPressCallbackCallsCount).to.equal(2);
            expect(PrettyInputText.prototype.handleOnKeyPress.calledTwice).to.equal(true);
            expect(rndValue).to.equal(onKeyPressValue);
        });

        it('onKeyPress event on number component', () => {
            const component = mount(
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue="950950950"
                    errorValue="Invalid phone"
                    size={100}
                    isEnabled={true}
                    isRequired={true}
                    onValidation={inputValue => (inputValue.length < 2) ? false : true}
                    onChange={e => { }}
                    onKeyPress={onKeyPressCallback}
                    labelColor='#d48'
                    backgroundColor='#000'
                    width={100}
                    type="number"
                />
            );
            expect(onKeyPressCallbackCallsCount).to.equal(0);
            expect(PrettyInputText.getDerivedStateFromProps.calledOnce).to.equal(true);
            expect(PrettyInputText.prototype.handleOnKeyPress.notCalled).to.equal(true);

            const inputTag = component.find('input').at(0);

            inputTag.simulate('focus');
            inputTag.simulate('keypress', { keyCode: 63 });
            expect(onKeyPressCallbackCallsCount).to.equal(0);
            expect(PrettyInputText.prototype.handleOnKeyPress.calledOnce).to.equal(true);
            expect(rndValue).to.not.equal(onKeyPressValue);
            inputTag.simulate('keypress', { keyCode: 53 });
            expect(onKeyPressCallbackCallsCount).to.equal(1);
            expect(PrettyInputText.prototype.handleOnKeyPress.calledTwice).to.equal(true);
            expect(rndValue).to.equal(onKeyPressValue);
        });
    });
});
