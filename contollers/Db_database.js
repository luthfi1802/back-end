// import { Db_database,
//     Db_database1,
//     Db_database2,
//     Db_database3,
//     Db_database4,
//     Db_database5
//  } from "../models/Db_databaseModel.js";

//  // data untuk bionacure
//  export const getDb_database = async(req, res) =>{
//     try {
//         const response = await Db_database.findAll({
//             offset: 0,
//             limit: 20
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_databaseById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database = await Db_database.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database = await Db_database.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan'})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database = await Db_database.findByPk(id);

//         if (!db_database) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database = await Db_database.findByPk(id);

//         // Hapus entri database
//         await db_database.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };

// //DATA UNTUK CMM
// export const getDb_database1 = async(req, res) =>{
//     try {
//         const response = await Db_database1.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_database1ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database1 = await Db_database1.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database1) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database1);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database1 = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database1 = await Db_database1.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan',})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database1 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database1 = await Db_database1.findByPk(id);

//         if (!db_database1) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database1.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database1 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database1 = await Db_database1.findByPk(id);

//         // Hapus entri database
//         await db_database1.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };

// //data untuk gap
// export const getDb_database2 = async(req, res) =>{
//     try {
//         const response = await Db_database2.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_database2ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database2 = await Db_database2.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database2) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database2 = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database2 = await Db_database2.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan'})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database2 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database2 = await Db_database2.findByPk(id);

//         if (!db_database2) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database2.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database2 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database2 = await Db_database2.findByPk(id);

//         // Hapus entri database
//         await db_database2.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };

// // data untuk putikayo
// export const getDb_database3 = async(req, res) =>{
//     try {
//         const response = await Db_database3.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_database3ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database3 = await Db_database3.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database3) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database3);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database3 = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database3 = await Db_database3.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan'})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database3 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database3 = await Db_database3.findByPk(id);

//         if (!db_database3) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database3.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database3 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database3 = await Db_database3.findByPk(id);

//         // Hapus entri database
//         await db_database3.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };

// // data untuk sinar12
// export const getDb_database4 = async(req, res) =>{
//     try {
//         const response = await Db_database4.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_database4ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database4 = await Db_database4.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database4) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database4);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database4 = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database4 = await Db_database4.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan'})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database4 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database4 = await Db_database4.findByPk(id);

//         if (!db_database4) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database4.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database4 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database4 = await Db_database4.findByPk(id);

//         // Hapus entri database
//         await db_database4.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };

// //data untuk SR12
// export const getDb_database5 = async(req, res) =>{
//     try {
//         const response = await Db_database5.findAll({
//             offset: 0,
//             limit: 10
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };


// export const getDb_database5ById = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         // Cari data berdasarkan ID
//         const db_database5 = await Db_database5.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!db_database5) {
//             return res.status(404).json({ msg: "not found" });
//         }

//         // Kirim respon kalau data ditemukan
//         res.status(200).json(db_database5);
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: "Failed", error: error.message });
//     }
// };

// export const createDb_database5 = async(req, res) =>{
//     const { host, users, Password, database_name, driver } = req.body;
//     try {
//         const db_database5 = await Db_database5.create({
//             host: host,
//             users: users,
//             Password: Password,
//             database_name: database_name,
//             driver: driver,
//         });
//         res.status(201).json({msg: 'Data berhasil di daftarkan'})
//     } catch (error) {
//         res.status(500).json({msg: error.message})
//     }
// };

// export const updateDb_database5 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter
//     const { host, users, Password, database_name, driver } = req.body; // Mengambil data dari req.body

//     try {
//         const db_database5 = await Db_database5.findByPk(id);

//         if (!db_database5) {
//             return res.status(404).json({ msg: "Data tidak ditemukan" });
//         }

//         // Perbarui dengan data baru
//         await db_database5.update({
//             host,
//             users,
//             Password,
//             database_name,
//             driver
//         });

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil diperbarui',});
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Failed to update database entry', error: error.message });
//     }
// };

// export const deleteDb_database5 = async(req, res) =>{
//     const { id } = req.params; // Mengambil ID dari URL parameter

//     try {
//         const db_database5 = await Db_database5.findByPk(id);

//         // Hapus entri database
//         await db_database5.destroy();

//         // Kirim respons sukses
//         res.status(200).json({ msg: 'Data berhasil dihapus' });
//     } catch (error) {
//         // Kirim respons error
//         res.status(500).json({ msg: 'Gagal Menghapus Data', error: error.message });
//     }
// };