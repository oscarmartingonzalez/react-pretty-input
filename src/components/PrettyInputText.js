
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettyInputTextStyle from './css/prettyInputText.scss';

const defaultOnValidation = e => true;

class PrettyInputText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: this.props.inputValue,
            labelShow: false,
            inputActivated: false,
            errorActivated: false
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleTextInputOnFocus = this.handleTextInputOnFocus.bind(this);
        this.handleTextInputOnBlur = this.handleTextInputOnBlur.bind(this);
    }

    handleTextInputChange(e) {
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
        this.setState({ inputValue: e.target.value });
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

    render() {
        const inputValue = this.state.inputValue || '';
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
            <div className={mainContainerStyleClasses}>
                <div className={insideContainerStyleClasses}>
                    <input
                        type="text"
                        maxLength={this.props.size}
                        name={this.props.name}
                        placeholder={this.props.inputValue}
                        onChange={this.handleTextInputChange}
                        onFocus={this.handleTextInputOnFocus}
                        onBlur={this.handleTextInputOnBlur}
                    />
                    <label className="success-label">{this.props.inputValue}</label>
                    <label className="error-label">{this.props.errorValue}</label>
                </div>
            </div>
        )
    }
}

PrettyInputText.propTypes = {
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    errorValue: PropTypes.string,
    size: PropTypes.number,
    labelShow: PropTypes.bool,
    isRequired: PropTypes.bool,
    onValidation: PropTypes.func
};

PrettyInputText.defaultProps = {
    errorValue: 'Error',
    size: 50,
    isRequired: false,
    onValidation: defaultOnValidation
};

export default PrettyInputText;
