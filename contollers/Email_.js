// import { Email_,
//     Email_1,
//     Email_2,
//     Email_3,
//     Email_4,
//     Email_5
//  } from "../models/EmailModel_.js";

//  // DATA UNTUK CMM
//  export const getEmail = async(req, res) =>{
//     try {
//         const response = await Email_.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmailById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email = await Email_.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email = await Email_.findByPk(id);
        
//     // Update server dengan data baru
//         await email.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email = await Email_.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };

// //Data untuk GAP
// export const getEmail1 = async(req, res) =>{
//     try {
//         const response = await Email_1.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmail1ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email1 = await Email_1.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email1) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail1 = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_1.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail1 = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email1 = await Email_1.findByPk(id);
        
//     // Update server dengan data baru
//         await email1.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail1 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email1 = await Email_1.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email1) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email1.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };

// // DATA UNTUK PUTIKAYO
// export const getEmail2 = async(req, res) =>{
//     try {
//         const response = await Email_2.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmail2ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email2 = await Email_2.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email2) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email2);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail2 = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_2.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail2 = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email2 = await Email_2.findByPk(id);
        
//     // Update server dengan data baru
//         await email2.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail2 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email2 = await Email_2.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email2) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email2.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };

// // Data untuk SINAR12
// export const getEmail3 = async(req, res) =>{
//     try {
//         const response = await Email_3.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmail3ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email3 = await Email_3.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email3) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email3);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail3 = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_3.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail3 = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email3 = await Email_3.findByPk(id);
        
//     // Update server dengan data baru
//         await email3.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail3 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email3 = await Email_3.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email3) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email3.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };

// // Data untuk SR12
// export const getEmail4 = async(req, res) =>{
//     try {
//         const response = await Email_4.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmail4ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email4 = await Email_4.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email4) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email4);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail4 = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_4.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail4 = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email4 = await Email_4.findByPk(id);
        
//     // Update server dengan data baru
//         await email4.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail4 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email4 = await Email_4.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email4) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email4.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };

// //Data untuk BIONNACURE
// export const getEmail5 = async(req, res) =>{
//     try {
//         const response = await Email_5.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// }

// export const getEmail5ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari email berdasarkan ID
//         const email5 = await Email_5.findByPk(id);

//         // Cek jika email tidak ditemukan
//         if (!email5) {
//             return res.status(404).json({ msg: "Email not found" });
//         }

//         // Kirim respon data kalau ditemukan
//         res.status(200).json(email5);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed to retrieve email", error: error.message });
//     }
// };

// export const createEmail5 = async(req, res) =>{
//     const {nik, nama_karyawan, position_title, e_mail, keterangan, dept, id_organization} = req.body;
//     try {
//         await Email_5.create({
//             nik: nik,
//             nama_karyawan: nama_karyawan,
//             position_title: position_title,
//             e_mail: e_mail,
//             keterangan: keterangan,
//             dept: dept,
//             id_organization: id_organization
//         });
//         res.status(201).json({msg: 'Data berhasil didaftarkan'});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateEmail5 = async(req, res) =>{
//     const { nama_karyawan, position_title, e_mail, keterangan, dept, id_organization } = req.body;
//     const { id } = req.params;
//     try {
//         // Cari server berdasarkan ID
        
//         const email5 = await Email_5.findByPk(id);
        
//     // Update server dengan data baru
//         await email5.update({
//             nama_karyawan,
//             position_title,
//             e_mail,
//             keterangan,
//             dept,
//             id_organization,
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };


// export const deleteEmail5 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const email5 = await Email_5.findByPk(id);

//         // Cek jika server tidak ditemukan
//         if (!email5) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus server
//         await email5.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data berhasil Di Hapus" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
//     }
// };