
const { Router } = require('express');
const { check } = require('express-validator');

const { validateInputs } = require('../middlewares/validations');
const { rolExist, emailExist, userExistById } = require('../helpers/db-validators');

const { userGet,
        userPut,
        userPost,
        userDelete,
        userPatch } = require('../controllers/user.controller');

const router = Router();


// Get endpoint
router.get('/', userGet);

// Put endpoint
router.put('/:id', [
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom( userExistById ),
    check('role').custom( rolExist ),
    validateInputs
], userPut);

// Post endpoint
router.post('/', [
    check('name', 'The name is mandatory!').not().isEmpty(),
    check('password', 'The password is mandatory and must be greater than 6 characters.').isLength({ min: 6 }),
    check('email', 'The input value is not a valid email').isEmail(),
    check('email').custom( emailExist ),
    // check('role', 'Not is an allowed role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( rolExist ),
    validateInputs
], userPost);

// Delete endpoint
router.delete('/:id', [
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom( userExistById ),
    validateInputs
], userDelete);

// Patch endpoint
router.patch('/', userPatch);


module.exports = router;
