const express = require('express');
const { createUser, restrictionsUpdate } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', createUser);
router.put('/restrictions/', auth, restrictionsUpdate);

module.exports = router;
