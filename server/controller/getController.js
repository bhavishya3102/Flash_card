const pool = require('../db');

const getController=(req, res) => {
    pool.query('SELECT * FROM flipcard_info', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data');
        } else {
           return res.status(200).json({
                data:results
            });
        }
    });
}
module.exports={getController}


