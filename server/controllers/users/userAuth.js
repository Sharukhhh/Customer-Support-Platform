
import db from '../../connections/database.js';
import { encryptPassword, validatePassword } from '../../utils/securePassword.js';



export const registerUser = async (req, res) => {
    try {
        const { username , email , password} = req.body;

        const user = await db.models.Users.findOne({ where: { email : email } });

        if(user) {
            return res.status(400).json({error : 'User Exists'});
        }

        const encryptedPassword = await encryptPassword(password);

        await db.models.Users.create( {
            username,
            email, 
            password : encryptedPassword
        })

        return res.status(201).json({message : 'Account Created Successfully'});

    } catch (error) {
        console.log(error)
        return res.status(500).json({error : 'Server Error'});
    }
}



export const loginUser = async (req, res) => {
    try {
        const {email , password} = req.body;

        const user = await db.models.Users.findOne({ where: { email : email } });

        if(!user) {
            return res.status(400).json({error : 'User not found, Create An account to login!'});
        }

        const comparePassword = await validatePassword(password , user.password);

        if(comparePassword) {
            return res.status(200).json({message : 'Login Successfull', user});
        } else {
            return res.status(400).json({error : 'Invalid Password Entry, Try Again'});
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Server Error'});
    }
}


export const postComplaint = async (req , res) => {
    try {
        console.log(req.body);
        const {title , description , category , priority} = req.body;

        await db.models.Complaints.create( {
            title,
            description,
            category,
            status : 'received',
            priority
        })

        return res.status(201).json({message : 'Ticket raised Successfully'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Server Error'});
    }
}


export const getUserHistory = async (req, res) => {

    try {
        const userEmail = req.params.id;
        console.log(req.params);

        const user = await db.models.Users.findOne({where: {email : userEmail}});

        if(!user) {
            return res.status(404).json({error : 'No data found'});
        }

        const histories = await db.models.Complaints.findAll({where : {email : userEmail}});

        console.log(histories , 'ddddd');
        return res.status(200).json({message: 'success' , histories});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Server Error'});
    }
}