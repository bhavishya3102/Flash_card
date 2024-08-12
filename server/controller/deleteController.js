const pool = require('../db');
const deleteController =(req, res) => {
    const { id } = req.params;
  
    const query = 'DELETE FROM flipcard_info WHERE id = ?';
    pool.query(query, [id], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting data');
      } else if (results.affectedRows === 0) {
        res.status(404).send('No entry found with the given ID');
      } else {
        res.status(200).send('Entry deleted successfully');
      }
    });
  }
  module.exports={deleteController}
  