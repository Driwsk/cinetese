import * as bcrypt from 'bcrypt';

export async function hashPassword(password: any) {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
}

export async function verifyPassword(password: string | Buffer, hashedPassword: string) {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}