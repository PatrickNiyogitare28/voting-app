import { hash, verify } from 'argon2';

const KEY = process.env.BCRYPT_KEY;

export const hashPassword =  (password) => {
    return hash(password, 10, { key: KEY });
}

export const comparePassword =  (password, hash) => {
    try{
        return verify(hash, password, { key: KEY });
    }
    catch(err){
        return false;
    }
}
