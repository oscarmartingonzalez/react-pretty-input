# react-pretty-input
A pretty input form field for React projects.

## [Changelog](https://github.com/elmao79/react-pretty-input/blob/master/CHANGELOG.md)

## Installation:
```
npm install react-pretty-input
```

## Usage:

ES6 import:
```js
import { PrettyInputText } from 'react-pretty-input';
```

```jsx
// In JSX
<PrettyInputText name="email" inputValue="Email Address" errorValue="Invalid Email Address" isRequired />

// In vanilla JS
React.createElement(PrettyInputText, { name: 'email', inputValue: 'Email Address', errorValue: 'Invalid Email Address', isRequired: true});
```

## Props
#### `name` (required) (type: `string`)
This prop is the name attribute of the generated input tag.

#### `inputValue` (required) (type: `string`)
This prop is the description string of the field. It's used to show the placeholder and the label of the input to describe it.

#### `errorValue` (optional) (type: `string`) (default: `'Error'`)
This prop is the description string of and error occurred in the field. It's used to show the error in the label to describe it.

#### `size` (optional) (type: `integer`) (default: `50`)
This prop is used to limit the input string length of the field.

#### `isRequired` (optional) (type: `boolean`) (default: `false`)
This prop is used to indicate if the input string of the field is required. If the prop value is `true` and the field is empty an error is showed in label and border field.

#### `onValidation` (optional) (type: `function`) (default: `e => true`)
