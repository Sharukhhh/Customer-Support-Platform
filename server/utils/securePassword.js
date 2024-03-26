import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
    
    const salt = await bcrypt.genSalt(10);

    const hashedPasword = await bcrypt.hash(password , salt);

    return hashedPasword;
}

export const validatePassword  = async (password , userPassword) => {

    const check = await bcrypt.compare(password , userPassword);

    return check;
}