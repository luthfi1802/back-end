import express from "express";
import { Db_database,
    Db_database1,
    Db_database2,
    Db_database3,
    Db_database4,
    Db_database5
 } from "../models/Db_databaseModel.js";

 const router = express.Router();

 router.all('/dbdatabase/:model/:id?', async (req, res) => {
    const { model, id } = req.params;
    const { method } = req;
    const { host, users, Password, database_name, driver } = req.body;
    const { page = 1, limit = 10 } = req.query; 

    let Model;
    switch (model) {
        case 'dbdatabase':
            Model = Db_database;
            break;
        case 'dbdatabase1':
            Model = Db_database1;
            break;
        case 'dbdatabase2':
            Model = Db_database2;
            break;
        case 'dbdatabase3':
            Model = Db_database3;
            break;
        case 'dbdatabase4':
            Model = Db_database4;
            break;
        case 'dbdatabase5':
            Model = Db_database5;
            break;
        default:
            return res.status(400).json({ msg: "Invalid model" });
    }

    const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Ambil domain berdasarkan ID
                    const dbdatabase = await Model.findByPk(id);
                    if (!dbdatabase) {
                        return res.status(404).json({ msg: 'Not Found' });
                    }
                    return res.status(200).json(dbdatabase);
                } else {
                    // Ambil daftar domain
                    const response = await Model.findAll({
                        offset: offset,
                        limit: parseInt(limit, 10)
                    });
                    return res.status(200).json(response);
                }

            case 'POST':
                // Buat data baru
                await Model.create({ host, users, Password, database_name, driver });
                return res.status(201).json({ msg: "Berhasil tambah data" });

            case 'PATCH':
                if (!id) {
                    return res.status(400).json({ msg: "ID is required for updating" });
                }
                // Cari data berdasarkan ID
                const dbdatabaseToUpdate = await Model.findByPk(id);
                if (!dbdatabaseToUpdate) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Update data dengan data baru (partial update)
                await dbdatabaseToUpdate.update({ host, users, Password, database_name, driver });
                return res.status(200).json({ msg: "Berhasil Update Data" });

            case 'DELETE':
                if (!id) {
                    return res.status(400).json({ msg: "id tidak ditemukan" });
                }
                // Cari data berdasarkan ID
                const dbdatabaseToDelete = await Model.findByPk(id);
                if (!dbdatabaseToDelete) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Hapus data
                await dbdatabaseToDelete.destroy();
                return res.status(200).json({ msg: "Berhasil Menghapus Data" });

            default:
                return res.status(405).json({ msg: "Method Not Allowed" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Failed', error: error.message });
    }
});



export default router;