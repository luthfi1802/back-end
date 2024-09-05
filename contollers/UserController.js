import argon2 from "argon2";
import Users from "../models/UserModel.js";
import dotenv from "dotenv";
dotenv.config();

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll({
            attributes: ['uuid','username','email'],
            offset: 0, 
            limit: 5 
        },
    );
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await Users.findOne({
            attributes: ["uuid","username","email"],
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async (req, res) => {
    const {username, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: 'Password dan confPassword tidak cocok'});
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.status(201).json({msg: 'Register berhasil'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updateUser = async(req, res) => {
    const user = await Users.findOne();
    
    if(!user) return res.status(404).json({msg: 'User tidak ditemukan'});
    const {username, email, password, confPassword} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: 'Password dan confPassword tidak cocok'});
    try {
        await Users.update({
            username: username,
            email: email,
            password: hashPassword
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: 'Update berhasil'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteUser = async(req, res) => {
    const user = await Users.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: 'User tidak ditemukan'});
    try {
        await Users.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: 'Deleted Succesfully'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
};

