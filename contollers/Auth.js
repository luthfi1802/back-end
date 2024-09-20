import Users from "../models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { kirimEmail } from "../kirim.js";
// import nodemailer from "nodemailer";
// import crypto from "crypto";
// import { Op } from "sequelize";



const JWT_SECRET = process.env.JWT_SECRET;

export const Login = async(req, res) => {
    try {
        // Validasi input
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ msg: 'Username dan password harus diisi' });
        }

        // Temukan pengguna berdasarkan username
        const user = await Users.findOne({
            where: {
                username: username // Menggunakan username dari req.body
            }
        });

        if (!user) {
            return res.status(404).json({ msg: 'User tidak ditemukan' });
        }

        // Verifikasi password
        const ismatch = await argon2.verify(user.password, password); // Verifikasi password dengan argon2.verify
        if (!ismatch) {
            return res.status(400).json({ msg: 'Password Salah' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username}, // Payload token
            JWT_SECRET, // Diambil dari dotenv
            { expiresIn: '1h' } // Waktu kedaluwarsa token
        );

        req.session.user = {
            id: user.id,
            username: user.username
        };

        // Kirim respons dengan token
        console.log('Berhasil login, token dihasilkan'); 
        res.status(200).json({
            token: token,
            uuid: user.uuid,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error); 
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

export const Me = async(req, res) => {
    try {
        const userId = req.session.user.id;
        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.status(200).json({
            uuid: user.uuid,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({ msg: 'Mohon Login Ke akun anda' });
    }
};

export const logOut = async(req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }

        res.status(200).json({ msg: 'Logout Berhasil' });
    });
};


export const forgotPassword = async(req, res) => {
    try {
        const { email } = req.body;

        // Validasi format email jika diperlukan
        if (!email || !email.includes('@')) {
            return res.status(400).json({
                status: false,
                message: 'Format email tidak valid'
            });
        }

        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(200).json({
                status: false,
                message: 'Email tidak tersedia'
            });
        }
        const token = jwt.sign(
            { id: user.uuid },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } 
        );

        user.resetPasswordLink = token;
        await user.save();

    const templateEmail = {
        from: 'Me',
        to: email,
        subject: 'Reset Password',
        html: `<p>Silahkan klik link dibawah untuk reset password anda </p> <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
    };
     // Tangani kesalahan pengiriman email
     try {
        await kirimEmail(templateEmail);
    } catch (emailError) {
        console.error('Email tidak berhasil dikirim:', emailError);
        return res.status(500).json({
            status: false,
            message: 'Gagal mengirim email reset password'
        });
    }

    return res.status(200).json({
        status: true,
        message: 'Link reset password berhasil terkirim'
    });
} catch (error) {
    console.error('Terjadi kesalahan:', error);
    return res.status(500).json({
        status: false,
        message: 'Terjadi kesalahan pada server'
    });
}
};
    // kirimEmail(templateEmail)
    // return res.status(200).json({
    //     status: true,
    //     message: 'Link reset password berhasil terkirim'
    // })


export const resetPassword = async(req, res) => {
    try {
        const { token, password } = req.body;

        // Validasi input
        if (!token || !password) {
            return res.status(400).json({
                status: false,
                message: 'Token dan password harus diisi'
            });
        }

        const user = await Users.findOne({ where: { resetPasswordLink: token } });
        if (!user) {
            return res.status(400).json({
                status: false,
                message: 'Link reset password tidak valid'
            });
        }

        const hashPassword = await argon2.hash(password, 10);
        user.password = hashPassword;
        user.resetPasswordLink = null; // Hapus link reset setelah password berhasil diubah
        await user.save();

        return res.status(201).json({
            status: true,
            message: 'Password berhasil diganti'
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        });
    }
};
    // if (user) {
    //     const hashPassword = await argon2.hash(password, 10)
    //     user.password = hashPassword
    //     await user.save()
    //     return res.status(201).json({
    //         status: true,
    //         message: 'password berhasil diganti'
    //     })
    // }
