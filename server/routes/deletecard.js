
const express = require('express');
const router = express.Router();
const pool = require('../db');

const {deleteController}=require("../controller/deleteController")

router.delete('/delete/:id', deleteController);

module.exports = router;
