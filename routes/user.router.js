const express = require('express');
const { createUser, restrictionsUpdate } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', createUser);
router.put('/restrictions/:id', auth, restrictionsUpdate);

module.exports = router;
