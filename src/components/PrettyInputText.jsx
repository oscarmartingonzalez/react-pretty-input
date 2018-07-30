
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettyInputTextStyle from './css/prettyInputText.scss';
import { isValid } from '../validators/DataTypeValidator';

class PrettyInputText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            labelShow: (this.props.inputValue.length > 0) ? true : false,
            inputActivated: false,
            errorActivated: false
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleTextInputOnFocus = this.handleTextInputOnFocus.bind(this);
        this.handleTextInputOnBlur = this.handleTextInputOnBlur.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.inputValue.length > 0) {
            state = Object.assign(state, { labelShow: true });
        } else {
            state = Object.assign(state, { labelShow: false });
        }

        return state;
    }

    checkNotEmpty(value) {
        const { isRequired } = this.props;
        const { errorActivated } = this.state;
        if (value.length > 0) {
            if (errorActivated) {
                this.setState({ errorActivated: false });
            }
        } else if (isRequired) {
            this.setState({ errorActivated: true });
        }
    }

    handleTextInputChange(e) {
        const { isEnabled, onChange } = this.props;

        if (isEnabled) {
            this.checkNotEmpty(e.target.value.toString());
            if (onChange) {
                onChange(e);
            }
        }
    }

    handleTextInputOnFocus() {
        this.setState({ inputActivated: true });
    }

    handleTextInputOnBlur(e) {
        const { onValidation, inputValue } = this.props;

        this.setState({ inputActivated: false });
        if (!onValidation(inputValue)) {
            this.setState({ errorActivated: true });
        } else {
            this.checkNotEmpty(e.target.value.toString());
        }
    }

    handleOnKeyPress(e) {
        const { type, isEnabled, onKeyPress } = this.props;
        
        if (isValid(type, String.fromCharCode(e.keyCode || e.which))) {
            if (isEnabled) {
                if (onKeyPress) {
                    onKeyPress(e);
                }
            }
        } else {
            e.preventDefault();
        }
    }

    render() {
        let mainContainerStyleClasses = prettyInputTextStyle['pretty-input-text'];
        if (this.state.errorActivated) {
            mainContainerStyleClasses += ' error';
        }
        let insideContainerStyleClasses = 'inside-container';
        if (this.state.inputActivated) {
            insideContainerStyleClasses += ' is-active';
        }
        if (this.state.labelShow) {
            insideContainerStyleClasses += ' show-label';
        }
        return (
            <div className={mainContainerStyleClasses} style={{width: `${this.props.width}px`}}>
                <div className={insideContainerStyleClasses} style={{background: this.props.backgroundColor}}>
                    <input
                        type="text"
                        maxLength={this.props.size}
                        name={this.props.name}
                        placeholder={this.props.labelText}
                        value={this.props.inputValue}
                        onChange={this.handleTextInputChange}
                        onFocus={this.handleTextInputOnFocus}
                        onBlur={this.handleTextInputOnBlur}
                        onKeyPress={this.handleOnKeyPress}
                        style={{color: this.props.labelColor}}
                        disabled={!this.props.isEnabled}
                    />
                    <label className="success-label" style={{color: this.state.labelShow ? this.props.labelColor: this.props.backgroundColor}}>{this.props.labelText}</label>
                    <label className="error-label">{this.props.errorValue}</label>

                </div>
            </div>
        )
    }
}

PrettyInputText.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    errorValue: PropTypes.string,
    size: PropTypes.number,
    isEnabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    onValidation: PropTypes.func,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    labelColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    type: (props, propName, componentName) => {
        if (props[propName]) {
            const allowedTypes = ['number', 'string'];
            if (allowedTypes.indexOf(props[propName]) === -1) {
                return new Error(`Invalid prop "${propName}" supplied to "${componentName}".`);
            }
        }
    }
};

PrettyInputText.defaultProps = {
    inputValue: '',
    errorValue: 'Error',
    size: 50,
    isEnabled: true,
    isRequired: false,
    onValidation: inputValue => true,
    onChange: null,
    onKeyPress: null,
    labelColor: '#0069ff',
    backgroundColor: '#fff',
    width: 200,
    type: 'string'
};

export default PrettyInputText;
