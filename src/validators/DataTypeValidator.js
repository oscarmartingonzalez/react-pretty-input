
import * as DataTypeNuberValidator from './DataTypeNumberValidator';

exports.isValid = (type, value) => {
    if (type === 'number') {
        return DataTypeNuberValidator.isValid(value);
    } else {
        return true;
    }
};
