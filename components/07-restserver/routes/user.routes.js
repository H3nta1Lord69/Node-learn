
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { userGet,
        userPut,
        userPost,
        userDelete,
        userPatch } = require('../controllers/user.controller');
const { validateInputs } = require('../middlewares/validations');

const router = Router();


// Get endpoint
router.get('/', userGet);

// Put endpoint
router.put('/:id', userPut);

// Post endpoint
router.post('/', [
    check('name', 'The name is mandatory!').not().isEmpty(),
    check('password', 'The password is mandatory and must be greater than 6 characters.').isLength({ min: 6 }),
    check('email', 'The input value is not a valid email').isEmail(),
    // check('role', 'Not is an allowed role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( async( role = '' ) => {
        const roleExists = await Role.findOne({ role });
        if( !roleExists ) {
            throw new Error(`The role ${ role } isn't registered.`)
        }
    }),
    validateInputs
], userPost);

// Delete endpoint
router.delete('/', userDelete);

// Patch endpoint
router.patch('/', userPatch);


module.exports = router;
