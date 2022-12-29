const express = require("express");

// The express framework can return a sort of mini application or a router:
const router = express.Router();

const userController = require('./controllers/userController');

router.get('/', userController.home);
router.post('/register', userController.register);

// Setting router variable ready for exportation:
module.exports = router;
