const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user:'postgres',
    password: 'password',
    database: 'firstapi',
    port:'5432'
});

    const getusers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows)
 }
    const getuserbyid = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('SELECT * from users WHERE id = $1', [id]);
        res.json(response.rows);

}

    const createusers = async (req, res) => {
         const { name, email } = req.body;
         const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        // console.log(req.body);
        console.log(response);
        res.json({
            message: 'user created',
            body:{ user: {name, email} }
         });
            
    }

    const deleteusers = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(`user ${id} Deleted`);
        console.log(response);

}

const updateusers = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json(`User ${id} Updated`);
    console.log(response);
}

module.exports = { getusers, createusers, getuserbyid, deleteusers, updateusers }