import Users from "../models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"
import crypto from "crypto"


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
            { id: user.id, username: user.username, password: user.password}, // Payload token
            JWT_SECRET, // Diambil dari dotenv
            { expiresIn: '1h' } // Waktu kedaluwarsa token
        );

        req.session.user = {
            id: user.id,
            username: user.username
        };

        // Kirim respons dengan token
        console.log('Berhasil login, token dihasilkan'); // Tambahkan log untuk debugging
        res.status(200).json({
            token: token,
            uuid: user.uuid,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error); // Tambahkan log untuk debugging
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

        res.status(200).json({ msg: 'Logout success' });
    });
};


const transporter = nodemailer.createTransport({
    service: 'Gmail', // Atau penyedia email lain
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ msg: 'Email tidak ditemukan' });
        }

        // Generate token
        const token = crypto.randomBytes(20).toString('hex');

        // Simpan token di basis data atau dalam sistem penyimpanan sementara
        // Misalnya, simpan token di basis data dengan waktu kedaluwarsa
        await user.update({ resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000 }); // Token berlaku selama 1 jam

        // Kirim email dengan tautan reset password
        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Reset Password',
            text: `Anda menerima email ini karena kami menerima permintaan reset password untuk akun Anda.\n\n` +
                  `Silakan klik tautan berikut atau salin dan tempelkan ke browser Anda untuk menyetel ulang password Anda:\n\n` +
                  `${resetUrl}\n\n` +
                  `Jika Anda tidak meminta reset password ini, abaikan email ini dan tidak ada perubahan yang akan dilakukan pada akun Anda.\n`
        });

        res.status(200).json({ msg: 'Email reset password telah dikirim' });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: { [Op.gt]: Date.now() } // Cek apakah token belum kedaluwarsa
            }
        });

        if (!user) {
            return res.status(400).json({ msg: 'Token tidak valid atau sudah kedaluwarsa' });
        }

        // Hash password baru
        const hashedPassword = await argon2.hash(newPassword);

        // Update password dan hapus token
        await user.update({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null
        });

        res.status(200).json({ msg: 'Password berhasil diperbarui' });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};