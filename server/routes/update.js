const express = require('express');
const router = express.Router();
const pool = require('../db');

const {updateController}=require("../controller/updateController")

router.put('/update/:id', updateController);

module.exports = router;