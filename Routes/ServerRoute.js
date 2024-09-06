import express from "express";
import { Servers,
    Servers1,
    Servers2,
    Servers3,
    Servers4,
    Servers5
 } from "../models/ServerModel.js";

const router = express.Router();

router.all('/servers/:model/:id?', async (req, res) => {
    const { model, id } = req.params;
    const { method } = req;
    const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body

    let Model;
    switch (model) {
        case 'servers':
            Model = Servers;
            break;
        case 'servers1':
            Model = Servers1;
            break;
        case 'servers2':
            Model = Servers2;
            break;
        case 'servers3':
            Model = Servers3;
            break;
        case 'servers4':
            Model = Servers4;
            break;
        case 'servers5':
            Model = Servers5;
            break;
        default:
            return res.status(400).json({ msg: "Invalid model" });
    }

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Ambil data berdasarkan ID
                    const server = await Model.findByPk(id);
                    if (!server) {
                        return res.status(404).json({ msg: 'Not Found' });
                    }
                    return res.status(200).json(server);
                } else {
                    // get seluruh data
                    const response = await Model.findAll({
                        offset: 0,
                        limit: 10
                    });
                    return res.status(200).json(response);
                }

            case 'POST':
                // if (!type || !ip_local || !ip_public || !os || !Username || !Password || !core || !ram) {
                //     return res.status(400).json({ msg: "All fields are required" });
                // }
                // Buat data baru
                await Model.create({ type, ip_local, ip_public, os, Username, Password, core, ram });
                return res.status(201).json({ msg: "Berhasil tambah data" });

            case 'PATCH':
                if (!id) {
                    return res.status(400).json({ msg: "ID is required for updating" });
                }
                // Cari data berdasarkan ID
                const serverToUpdate = await Model.findByPk(id);
                if (!serverToUpdate) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Update data dengan data baru 
                await serverToUpdate.update({ type, ip_local, ip_public, os, Username, Password, core, ram });
                return res.status(200).json({ msg: "Berhasil Update Data" });

            case 'DELETE':
                if (!id) {
                    return res.status(400).json({ msg: "id tidak ditemukan" });
                }
                // Cari data berdasarkan ID
                const serverToDelete = await Model.findByPk(id);
                if (!serverToDelete) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Hapus data
                await serverToDelete.destroy();
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