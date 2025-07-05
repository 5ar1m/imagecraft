const { StatusCodes } = require('http-status-codes');
const prisma = require('../config/prisma');
const AppError = require('../utils/appError');
const validateEmail = require('../utils/validateEmail');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password } = userData;

    // validate user data
    if (typeof name !== 'string' || 
        !validateEmail(email) || 
        typeof password !== 'string' || 
        password.length < 8) {
            throw new AppError('Invalid User Data', StatusCodes.BAD_REQUEST);
        }

    // check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new AppError('User with this email already exists', StatusCodes.BAD_REQUEST);
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // create user in database
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}

module.exports = { createUser };