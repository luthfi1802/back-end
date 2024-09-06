import express from "express";
import { Email_,
    Email_1,
    Email_2,
    Email_3,
    Email_4,
    Email_5
 } from "../models/EmailModel_.js";

 const router = express.Router();

 router.all('/email/:model/:id?', async (req, res) => {
    const { model, id } = req.params;
    const { method } = req;
    const { nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
    const { page = 1 , limit = 10} = req.query;

    let Model;
    switch (model) {
        case 'email':
            Model = Email_;
            break;
        case 'email1':
            Model = Email_1;
            break;
        case 'email2':
            Model = Email_2;
            break;
        case 'email3':
            Model = Email_3;
            break;
        case 'email4':
            Model = Email_4;
            break;
        case 'email5':
            Model = Email_5;
            break;
        default:
            return res.status(400).json({ msg: "Invalid model" });
    }

    const offset = (parseInt(page, 10)- 1) * (parseInt(limit, 10))
    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Ambil data email berdasarkan ID
                    const email = await Model.findByPk(id);
                    if (!email) {
                        return res.status(404).json({ msg: 'Not Found' });
                    }
                    return res.status(200).json(email);
                } else {
                    // get seluruh data
                    const response = await Model.findAll({
                        offset: offset,
                        limit: parseInt(limit, 10)
                    });
                    return res.status(200).json(response);
                }

            case 'POST':
                // if (!nik || !nama_karyawan || !position_title || !e_mail || !keterangan || !dept || !id_organization) {
                //     return res.status(400).json({ msg: "All fields are required" });
                // }
                // Buat data baru
                await Model.create({ nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization });
                return res.status(201).json({ msg: "Berhasil tambah data" });

            case 'PATCH':
                if (!id) {
                    return res.status(400).json({ msg: "ID is required for updating" });
                }
                // Cari data berdasarkan ID
                const emailToUpdate = await Model.findByPk(id);
                if (!emailToUpdate) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Update data dengan data baru 
                await emailToUpdate.update({ nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization });
                return res.status(200).json({ msg: "Berhasil Update Data" });

            case 'DELETE':
                if (!id) {
                    return res.status(400).json({ msg: "id tidak ditemukan" });
                }
                // Cari data berdasarkan ID
                const emailToDelete = await Model.findByPk(id);
                if (!emailToDelete) {
                    return res.status(404).json({ msg: "Data not found" });
                }
                // Hapus data
                await emailToDelete.destroy();
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