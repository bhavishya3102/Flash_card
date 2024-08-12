
const express = require('express');
const router = express.Router();
const pool = require('../db');

const {deleteController}=require("../controller/deleteController")
// Define your routes here
router.delete('/delete/:id', deleteController);

module.exports = router;
