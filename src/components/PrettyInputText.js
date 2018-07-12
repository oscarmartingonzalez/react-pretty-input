
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettyInputTextStyle from './css/prettyInputText.scss';

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
    
    handleTextInputChange(e) {
        this.setState({ inputValue: e.target.value.toString() });
        if (this.props.isEnabled) {
            if (e.target.value.toString().length > 0) {
                this.setState({ labelShow: true });
                if (this.state.errorActivated) {
                    this.setState({ errorActivated: false });
                }
            } else {
                this.setState({ labelShow: false });
                if (this.props.isRequired) {
                    this.setState({ errorActivated: true });
                }
            }
            if (this.props.onChange) {
                this.props.onChange(e);
            }
        }
    }

    handleTextInputOnFocus(e) {
        this.setState({ inputActivated: true });
    }

    handleTextInputOnBlur(e) {
        this.setState({ inputActivated: false });
        if (!this.props.onValidation(e)) {
            this.setState({ errorActivated: true });
        }
    }

    handleOnKeyPress(e) {
        if (this.props.isEnabled) {
            if (this.props.onKeyPress) {
                this.props.onKeyPress(e);
            }
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
    labelShow: PropTypes.bool,
    isEnabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    onValidation: PropTypes.func,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    labelColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number
};

PrettyInputText.defaultProps = {
    inputValue: '',
    errorValue: 'Error',
    size: 50,
    isEnabled: true,
    isRequired: false,
    onValidation: e => true,
    onChange: null,
    onKeyPress: null,
    labelColor: '#0069ff',
    backgroundColor: '#fff',
    width: 200
};

export default PrettyInputText;
