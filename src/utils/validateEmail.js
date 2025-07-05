const { z } = require('zod');

function validateEmail (email) {
    const emailSchema = z.string().email();

    const result = emailSchema.safeParse(email);

    return result.success;
}

module.exports = validateEmail;