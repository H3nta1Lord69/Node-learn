
const { Router } = require('express');
const { check } = require('express-validator');

const { login, googleSignIn } = require('../controllers/auth.controller');
const { validateInputs } = require('../middlewares/validations');

const router = Router();


// Get endpoint
router.post('/login', [
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password is mandatory').not().isEmpty(),
    validateInputs
], login);

// Get endpoint
router.post('/google', [
    check('id_token', 'The id_token is mandatory!').not().isEmpty(),
    validateInputs
], googleSignIn);


module.exports = router;