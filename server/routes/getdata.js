const express = require('express');
const router = express.Router();
const pool = require('../db');

const {getController}=require("../controller/getController")
// Define your routes here
router.get('/data', getController);

module.exports = router;
