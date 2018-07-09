
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettyInputTextStyle from './css/prettyInputText.scss';

class PrettyInputText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: this.props.inputValue,
            labelShow: this.props.labelShow,
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
                        name="test"
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
    errorValue: PropTypes.string.isRequired,
    size: PropTypes.number,
    labelShow: PropTypes.bool,
    isRequired: PropTypes.bool
};

PrettyInputText.defaultProps = {
    inputValue: 'I\'m a pretty input text',
    errorValue: 'Error',
    size: 50,
    labelShow: false,
    isRequired: false
};

export default PrettyInputText;
