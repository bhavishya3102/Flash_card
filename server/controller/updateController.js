
const pool = require('../db');
const updateController=(req, res) => {
    const { id } = req.params; 
    const { question, answer } = req.body; 
   
    if (!question && !answer) {
        return res.status(400).send('At least one of question or answer is required');
    }


    let query = 'UPDATE flipcard_info SET';
    const queryParams = [];

    if (question) {
        query += ' question = ?';
        queryParams.push(question);
    }

    if (answer) {
        if (question) query += ',';
        query += ' answer = ?';
        queryParams.push(answer);
    }

    query += ' WHERE id = ?';
    queryParams.push(id);

     
    pool.query(query, queryParams, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating data');
        } else if (results.affectedRows === 0) {
            res.status(404).send('No entry found with the given ID');
        } else {
            res.status(200).json({ message: `Entry with ID ${id} updated successfully`, id, question, answer });
        }
    });
}

module.exports={updateController}