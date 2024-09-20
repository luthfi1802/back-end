import express from "express";
import { Aplikasi,
    Aplikasi1,
    Aplikasi2,
    Aplikasi3,
    Aplikasi4,
    Aplikasi5
 } from "../models/AplikasiModel.js";

const router = express.Router();

router.all('/aplikasi/:model/:id?', async (req, res) => {
    const { model, id } = req.params;
    const { method } = req;
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;
    const { page = 1, limit = 10 } = req.query; 

    let Model;
    switch (model) {
        case 'aplikasi':
            Model = Aplikasi;
            break;
        case 'aplikasi1':
            Model = Aplikasi1;
            break;
        case 'aplikasi2':
            Model = Aplikasi2;
            break;
        case 'aplikasi3':
            Model = Aplikasi3;
            break;
        case 'aplikasi4':
            Model = Aplikasi4;
            break;
        case 'aplikasi5':
            Model = Aplikasi5;
            break;
        default:
            return res.status(400).json({ msg: "Invalid model" });
    }

    const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Ambil data berdasarkan ID
                    const aplikasi = await Model.findByPk(id);
                    if (!aplikasi) {
                        return res.status(404).json({ msg: 'Not Found' });
                    }
                    return res.status(200).json(aplikasi);
                } else {
                    // get semua data
                    const response = await Model.findAll({
                        offset: offset,
                        limit: parseInt(limit, 10)
                    });
                    return res.status(200).json(response);
                }

            case 'POST':
                // Buat data baru
                await Model.create({ vm_id, ip_public, port_int, port_ext, domain, appname, username, password });
                return res.status(201).json({ msg: "Berhasil tambah data" });

            case 'PATCH':
                if (!id) {
                    return res.status(400).json({ msg: "ID is required for updating" });
                }
                // Cari data berdasarkan ID
                const aplikasiToUpdate = await Model.findByPk(id);
                if (!aplikasiToUpdate) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Update data dengan data baru 
                await aplikasiToUpdate.update({ vm_id, ip_public, port_int, port_ext, domain, appname, username, password });
                return res.status(200).json({ msg: "Berhasil Update Data" });

            case 'DELETE':
                if (!id) {
                    return res.status(400).json({ msg: "id tidak ditemukan" });
                }
                // Cari data berdasarkan ID
                const aplikasiToDelete = await Model.findByPk(id);
                if (!aplikasiToDelete) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Hapus data
                await aplikasiToDelete.destroy();
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