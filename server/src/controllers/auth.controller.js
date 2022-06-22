import User from './../database/models/user.model';
import { hashPassword, comparePassword } from '../utils/hash-password';
import { sign } from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if(userExist) return res.status(400).json({success: false, message: "User already exist" });
    
    const user = new User({name, email, password: await hashPassword(password)});
    await user.save();
    return res.status(201).json({success: true, data: user});
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(401).json({success: false, message: "Invalid Credentials" });

    const isMatch = await comparePassword(password, user.password);
    if(!isMatch) return res.status(401).json({success: false, message: "Invalid Credentials" });

    const token = sign({ _id: user._id, email, name: user.name }, process.env.JWT_KEY, { expiresIn: '1h' });
    return res.status(200).json({success: true, data: { token } });

}

export const getProfile = async (req, res) => {
    return res.status(200).json({success: true, data: req.user});
}