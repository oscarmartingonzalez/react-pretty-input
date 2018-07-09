
import React, { Component } from 'react';
import prettyInputTextStyle from './css/prettyInputText.scss';

class PrettyInputText extends Component {
    render() {
        const inputValue = this.props.inputValue || 'I\'m a pretty input text';
        return (
            <div class={prettyInputTextStyle['pretty-input-text']}>
                <input type="text" name="test" value={inputValue} />
            </div>
        )
    }
}

export default PrettyInputText;
