const express = require('express');
const router = express.Router();
const pool = require('../db');

const {updateController}=require("../controller/updateController")
// Define your routes here
router.put('/update/:id', updateController);

module.exports = router;