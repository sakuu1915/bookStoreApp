
/*export const getUserProfileMathod = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
        
    }
}*/

import User from "../modal/user.modal.js"

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne().select("-password");

        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);
    }
    catch (error){
        res.status(500).json({message: "Server error"});
    }
}