import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
    // Ambil token dari header Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

    if (token == null) return res.status(401).json({ msg: 'Token tidak ditemukan' });

    // Verifikasi token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ msg: 'Token tidak valid' });

        // Simpan data user dari token ke objek req
        req.user = user;
        next();
    });
};
