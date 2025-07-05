const { StatusCodes } = require('http-status-codes');
const { createUser } = require('../services/user');


async function signup (req, res) {
    if (!req.body) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'invalid user data'});
    }

    const { name, email, password } = req.body;

    const info = createUser({ name, email, password });
    return res.status(StatusCodes.OK).json({ message: 'user created successfully' });
}

async function login (req, res) {

}
module.exports = { signup, login };