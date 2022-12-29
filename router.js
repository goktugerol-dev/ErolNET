const express = require("express");

// The express framework can return a sort of mini application or a router:
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home-guest')
});

// Setting router variable ready for exportation:
module.exports = router;
