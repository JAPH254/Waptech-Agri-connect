
import config from '../dbase/config.js';
import sql from 'mssql';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config()


export const register =async(req, res)=>{
    const {Username, Password,Email}=req.body;
    const hashedpassword=bcrypt.hashSync(Password,10);
    try {
        const userCon=await sql.connect(config.sql);
        const result =await userCon.request()
             .input('Username',sql.VarChar, username)
             .input('Email',sql.VarChar,email)
             .query('SELECT * FROM Users WHERE Username=@username OR Email=@email');
        const User=result.recordset[0];
        if (User){
            res.status(409).json({error:'Ooops. User already exists'});
        }else{
            let pool=await sql.connect(config.sql);
            await pool.request()
                 .input('Username',sql.VarChar,Username)
                 .input('Password',sql.VarChar,hashedpassword)
                 .input('Email',sql.VarChar,Email)
                 .query('INSERT INTO Users (Username,Password,Email)VALUES(@Username,@hashedpassword,@Email');
                 res.status(200).send({message:'User created successfully'});
        }
        
    } catch (error) {
        res.status(500).json({error:'An error occured when registering the user'});
    }
    finally{
       sql.close();  
    }
   
};

export const login =async(req, res)=>{
    res.send('login')
};