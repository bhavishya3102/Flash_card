const express = require('express');
const router = express.Router();
const pool = require('../db');

const {addController}=require("../controller/addController")
// Define your routes here
router.post('/add', addController);

module.exports = router;