const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controller/UserController');

router.get('/', getUsers);
router.post('/create', createUser); // This is what POST /api/users/create maps to

module.exports = router;
