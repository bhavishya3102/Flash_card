
const pool = require('../db');
const updateController=(req, res) => {
    const { id } = req.params; // Get the id from the URL
    const { question, answer } = req.body; // Get the question and answer from the request body

    // Check if at least one field is provided
    if (!question && !answer) {
        return res.status(400).send('At least one of question or answer is required');
    }

    // Construct the dynamic SQL query based on provided fields
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

    // Execute the query with the dynamically constructed query string and parameters
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