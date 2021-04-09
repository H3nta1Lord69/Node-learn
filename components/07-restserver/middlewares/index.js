
const validateInputs = require('../middlewares/validations');
const validateJWT = require('../middlewares/validate-jwt');
const ValidateRoles = require('../middlewares/validate-role');

module.exports = {
    ...validateInputs,
    ...validateJWT,
    ...ValidateRoles
}