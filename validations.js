const validator = require("validator");

function createUser(name, email, password) {
    let error = [];
    if( validator.isEmpty(name)) {
        error.push("user name is not string or is empty");
    }
    if(!validator.isEmail(email)) {
        error.push("email is not valid")
    };
    if(!validator.isStrongPassword(password,
        [{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}]
        )) {
            error.push("user password must have min 8 chars, 1 lowercase, 1 uppercase, 1 number and 1 symbol");
        }
        return error;
}
module.exports = {
    createUser
}