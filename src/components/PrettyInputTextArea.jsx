
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
            this.checkNotEmpty(e.target.value.toString())
            if (onChange) {
                onChange(e);
            }
        }
    }

    handleTextInputOnFocus() {
        this.setState({ inputActivated: true });
    }

    handleTextInputOnBlur(e) {
        this.setState({ inputActivated: false });
        this.checkNotEmpty(e.target.value.toString())
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
            width,
            backgroundColor,
            size,
            name,
            labelText,
            inputValue,
            labelColor,
            isEnabled,
            errorValue,
        } = this.props;
        const {
            errorActivated,
            inputActivated,
            labelShow
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
                    <textarea
                        name={name}
                        rows={3}
                        cols={width}
                        maxLength={size}
                        placeholder={labelText}
                        value={inputValue}
                        onChange={this.handleTextInputChange}
                        onFocus={this.handleTextInputOnFocus}
                        onBlur={this.handleTextInputOnBlur}
                        onKeyPress={this.handleOnKeyPress}
                        style={{ color: labelColor }}
                        disabled={!isEnabled}
                    >
                    </textarea>
                </div>
            </div>
        );
    }
}

PrettyInputTextArea.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    size: PropTypes.number,
    isEnabled: PropTypes.bool,
    isRequired: PropTypes.bool,
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
    size: 50,
    isEnabled: true,
    isRequired: false,
    onChange: null,
    onKeyPress: null,
    labelColor: '#0069ff',
    backgroundColor: '#fff',
    width: 200,
    type: 'string'
};

export default PrettyInputTextArea;
