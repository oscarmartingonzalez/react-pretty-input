# react-pretty-input

## Overview
A pretty input form field for React projects.

[![NPM version][npm-image]][npm-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![npm download][download-image]][download-url]
[![MIT License][license-badge]][license-url]

## [Changelog](https://github.com/elmao79/react-pretty-input/blob/master/CHANGELOG.md)

## Installation
[![react-pretty-input](https://nodei.co/npm/react-pretty-input.png)](https://npmjs.org/package/react-pretty-input)

## Usage

ES6 import:
```js
import { PrettyInputText } from 'react-pretty-input';
```

```jsx
// In JSX
<PrettyInputText name="email" labelText="Email Address" errorValue="Invalid Email Address" isRequired />

// In vanilla JS
React.createElement(PrettyInputText, { name: 'email', labelText: 'Email Address', errorValue: 'Invalid Email Address', isRequired: true});
```

## Props

#### `name` (required) (type: `string`)
This prop is the name attribute of the generated input tag.

#### `labelText` (required) (type: `string`)
This prop is the description string of the field. It's used to show the placeholder and the label of the input to describe it.

#### `inputValue` (optional) (type: `string`)
This prop is the default value of the component.

#### `errorValue` (optional) (type: `string`) (default: `'Error'`)
This prop is the description string of and error occurred in the field. It's used to show the error in the label to describe it.

#### `size` (optional) (type: `integer`) (default: `50`)
This prop is used to limit the input string length of the field.

#### `isRequired` (optional) (type: `boolean`) (default: `false`)
This prop is used to indicate if the input string of the field is required. If the prop value is `true` and the field is empty an error is showed in label and border field.

#### `onValidation` (optional) (type: `function`) (default: `inputValue => true`)
This prop is used to pass a callback function to validate de input value of the component. This function must return a boolean value.

#### `onChange` (optional) (type: `function`) (default: `null`)
This prop is used to pass a callback function invoked on input text change.

#### `onKeyPress` (optional) (type: `function`) (default: `null`)
This prop is used to pass a callback function invoked on every key press event.

#### `labelColor` (optional) (type: `string`) (default: `#0069ff`)
This prop is used to set the color of the label.

#### `backgroundColor` (optional) (type: `string`) (default: `#fff`)
This prop is used to set the background color of the component.

#### `width` (optional) (type: `integer`) (default: `200`)
This prop is used to set the css width of the component.

## Contributing
Use [Github issues](https://github.com/elmao79/react-pretty-input/issues) for feature requests and bug reports. We actively accept pull requests.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/react-pretty-input.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-pretty-input
[download-image]: https://img.shields.io/npm/dm/react-pretty-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-pretty-input
[license-badge]: https://img.shields.io/npm/l/react-pretty-input.svg?style=flat-square
[license-url]: https://github.com/elmao79/react-pretty-input/blob/master/LICENSE
[coverage-badge]: https://coveralls.io/repos/github/elmao79/react-pretty-input/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/elmao79/react-pretty-input?branch=master
