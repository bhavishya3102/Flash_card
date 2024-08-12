const express = require("express");
const cors = require('cors');
const pool = require('./db');
const app = express();
const port = process.env.PORT || 4000;

const getdata=require("./routes/getdata")
const update=require("./routes/update")
const deletecard=require("./routes/deletecard")
const add=require("./routes/add")
app.use(cors());
app.use(express.json());


app.use('/api/v1',getdata)
app.use('/api/v1',update)
app.use('/api/v1',add)
app.use('/api/v1',deletecard)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
