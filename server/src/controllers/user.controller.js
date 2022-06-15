import User from '../database/models/user.model';

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json({success: true, data: users});
}

export const getUserById = async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    if(!user) return res.status(400).json({success: false, message: "User does not exist"});
    return res.status(200).json({success: true, data: user});
}

export const getUserByEmail = async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    if(!user) return res.status(400).json({success: false, message: "User does not exist"});
    return res.status(200).json({success: true, data: user});
}

export const updateUser = async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    if(!user) return res.status(400).json({success: false, message: "User does not exist"});
    const newUser = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    return res.status(200).json({success: true, data: newUser});
}

export const deleteUser = async (req, res) => {
    const user = await User.findOne({_id: req.params.id});
    if(!user) return res.status(400).json({success: false, message: "User does not exist"});
    await User.findOneAndDelete({_id: req.params.id});
    return res.status(200).json({success: true, data: user});
}



