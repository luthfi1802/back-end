import express from "express";
import { Organization,
        Organization1,
        Organization2,
        Organization3,
        Organization4,
        Organization5
    } from '../models/OrganizationModel.js'; // Pastikan path ini benar

    const router = express.Router();

   // Router menangani operasi CRUD
router.all('/organization/:model/:id?', async (req, res) => {
            const { model,id } = req.params;
            const { method } = req;
            const { name } = req.body;
    
            // Tentukan model berdasarkan parameter 'model'
            let Model;
            switch (model) {
                case 'organization':
                    Model = Organization;
                    break;
                case 'organization1':
                    Model = Organization1;
                    break;
                case 'organization2':
                    Model = Organization2;
                    break;
                case 'organization3':
                    Model = Organization3;
                    break;
                case 'organization4':
                    Model = Organization4;
                    break;
                case 'organization5':
                    Model = Organization5;
                    break;
                default:
                    return res.status(400).json({ msg: "Invalid model" });
            }
    
        try {
            switch (method) {
                case 'GET':
                    if (id) {
                        // Ambil organisasi berdasarkan ID
                        const organization = await Model.findByPk(id);
                        if (!organization) {
                            return res.status(404).json({ msg: 'Not Found' });
                        }
                        return res.status(200).json(organization);
                    } else {
                        // Ambil daftar organisasi
                        const response = await Model.findAll({
                            offset: 0,
                            limit: 10
                        });
                        return res.status(200).json(response);
                    }

                case 'POST':
                    // Buat organisasi baru
                    await Model.create({ name });
                    return res.status(201).json({ msg: "Berhasil Cuyy" });

                case 'PATCH':
                    if (!id) {
                        return res.status(400).json({ msg: "ID is required for updating" });
                    }
                    // Cari organisasi berdasarkan ID
                    const organizationToUpdate = await Model.findByPk(id);
                    if (!organizationToUpdate) {
                        return res.status(404).json({ msg: "Organization not found" });
                    }
                    // Update organisasi dengan data baru (partial update)
                    await organizationToUpdate.update({ name });
                    return res.status(200).json({ msg: "Berhasil Update Data" });

                case 'DELETE':
                    if (!id) {
                        return res.status(400).json({ msg: "ID is required for deleting" });
                    }
                    // Cari organisasi berdasarkan ID
                    const organizationToDelete = await Model.findByPk(id);
                    if (!organizationToDelete) {
                        return res.status(404).json({ msg: "Organization not found" });
                    }
                    // Hapus organisasi
                    await organizationToDelete.destroy();
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