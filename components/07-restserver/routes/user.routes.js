
const { Router } = require('express');
const { userGet,
        userPut,
        userPost,
        userDelete,
        userPatch } = require('../controllers/user.controller');

const router = Router();


// Get endpoint
router.get('/', userGet);

// Put endpoint
router.put('/:id', userPut);

// Post endpoint
router.post('/', userPost);

// Delete endpoint
router.delete('/', userDelete);

// Patch endpoint
router.patch('/', userPatch);


module.exports = router;
