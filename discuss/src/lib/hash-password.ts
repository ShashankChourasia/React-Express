const bcrypt = require("bcryptjs");

export async function hashPassword(password: string, bit : number) {
    return await bcrypt.hash(password, bit);
}

export async function comparePassword(password: string, userPassword : string) {
    return await bcrypt.compare(password, userPassword);
}