import express from "express";
import { Domain,
    Domain1,
    Domain2,
    Domain3,
    Domain4,
    Domain5
 } from "../models/DomainModel.js";

const router = express.Router();

router.all('/domain/:model/:id?', async (req, res) => {
    const { model, id } = req.params;
    const { method } = req;
    const { ip_local,ip_public, d_omain, port } = req.body

    let Model;
    switch (model) {
        case 'domain':
            Model = Domain;
            break;
        case 'domain1':
            Model = Domain1;
            break;
        case 'domain2':
            Model = Domain2;
            break;
        case 'domain3':
            Model = Domain3;
            break;
        case 'domain4':
            Model = Domain4;
            break;
        case 'domain5':
            Model = Domain5;
            break;
        default:
            return res.status(400).json({ msg: "Invalid model" });
    }

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Ambil domain berdasarkan ID
                    const domain = await Model.findByPk(id);
                    if (!domain) {
                        return res.status(404).json({ msg: 'Not Found' });
                    }
                    return res.status(200).json(domain);
                } else {
                    // Ambil daftar domain
                    const response = await Model.findAll({
                        offset: 0,
                        limit: 10
                    });
                    return res.status(200).json(response);
                }

            case 'POST':
                // Buat domain baru
                await Model.create({ ip_local,ip_public, d_omain, port });
                return res.status(201).json({ msg: "Berhasil Cuyy" });

            case 'PATCH':
                if (!id) {
                    return res.status(400).json({ msg: "ID is required for updating" });
                }
                // Cari domain berdasarkan ID
                const domainToUpdate = await Model.findByPk(id);
                if (!domainToUpdate) {
                    return res.status(404).json({ msg: "Domain not found" });
                }
                // Update domain dengan data baru (partial update)
                await domainToUpdate.update({ ip_local,ip_public, d_omain, port });
                return res.status(200).json({ msg: "Berhasil Update Data" });

            case 'DELETE':
                if (!id) {
                    return res.status(400).json({ msg: "id tidak ditemukan" });
                }
                // Cari domain berdasarkan ID
                const domainToDelete = await Model.findByPk(id);
                if (!domainToDelete) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Hapus domain
                await domainToDelete.destroy();
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