
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettyInputTextStyle from './css/prettyInputText.scss';

class PrettyInputTextArea extends Component {
    constructor(props) {
        super(props);

        const { inputValue } = this.props;
        this.state = {
            labelShow: (inputValue.length > 0),
            inputActivated: false,
            errorActivated: false
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleTextInputOnFocus = this.handleTextInputOnFocus.bind(this);
        this.handleTextInputOnBlur = this.handleTextInputOnBlur.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        let newState;

        if (props.inputValue.length > 0) {
            newState = Object.assign(state, { labelShow: true });
        } else {
            newState = Object.assign(state, { labelShow: false });
        }

        return newState;
    }

    handleTextInputChange(e) {
        const { isEnabled, isRequired, onChange } = this.props;
        const { errorActivated } = this.state;
        if (isEnabled) {
            if (e.target.value.toString().length > 0) {
                if (errorActivated) {
                    this.setState({ errorActivated: false });
                }
            } else if (isRequired) {
                this.setState({ errorActivated: true });
            }
            if (onChange) {
                onChange(e);
            }
        }
    }

    handleTextInputOnFocus() {
        this.setState({ inputActivated: true });
    }

    handleTextInputOnBlur() {
        this.setState({ inputActivated: false });
        const { onValidation, inputValue } = this.props;
        if (!onValidation(inputValue)) {
            this.setState({ errorActivated: true });
        }
    }

    handleOnKeyPress(e) {
        const { type, isEnabled, onKeyPress } = this.props;
        if (isEnabled) {
            if (onKeyPress) {
                onKeyPress(e);
            }
        }
    }

    render() {
        const {
            width, backgroundColor, size, name, labelText, inputValue, labelColor, isEnabled, errorValue
        } = this.props;
        const {
            errorActivated, inputActivated, labelShow
        } = this.state;

        let mainContainerStyleClasses = prettyInputTextStyle['pretty-input-text'];
        if (errorActivated) {
            mainContainerStyleClasses += ' error';
        }
        let insideContainerStyleClasses = 'inside-container';
        if (inputActivated) {
            insideContainerStyleClasses += ' is-active';
        }
        if (labelShow) {
            insideContainerStyleClasses += ' show-label';
        }

        return (
            <div className={mainContainerStyleClasses} style={{ width: `${width}px` }}>
                <div className={insideContainerStyleClasses} style={{ background: backgroundColor }}>
                    <input
                        type="text"
                        maxLength={size}
                        name={name}
                        placeholder={labelText}
                        value={inputValue}
                        onChange={this.handleTextInputChange}
                        onFocus={this.handleTextInputOnFocus}
                        onBlur={this.handleTextInputOnBlur}
                        onKeyPress={this.handleOnKeyPress}
                        style={{ color: labelColor }}
                        disabled={!isEnabled}
                    />
                    <label className="success-label" style={{ color: labelShow ? labelColor : backgroundColor }}>
                        {labelText}
                    </label>
                    <label className="error-label">
                        {errorValue}
                    </label>

                </div>
            </div>
        );
    }
}

PrettyInputTextArea.propTypes = {
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

PrettyInputTextArea.defaultProps = {
    inputValue: '',
    errorValue: 'Error',
    size: 50,
    isEnabled: true,
    isRequired: false,
    onValidation: inputValue => (inputValue.length > 0),
    onChange: null,
    onKeyPress: null,
    labelColor: '#0069ff',
    backgroundColor: '#fff',
    width: 200,
    type: 'string'
};

export default PrettyInputTextArea;
