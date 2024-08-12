const pool = require('../db');
const addController=(req, res) => {
    const { question, answer } = req.body;
    console.log(question)

    if (!question || !answer) {
        return res.status(400).send('Question and answer are required');
    }

   
    const query = 'INSERT INTO flipcard_info (question, answer) VALUES (?, ?)';
    pool.query(query, [question, answer], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding data');
        } else {
           
           return res.status(201).json({ id: results.insertId, question, answer });
        }
    });
}

module.exports={addController}