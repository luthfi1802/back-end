// import { Servers,
//     Servers1,
//     Servers2,
//     Servers3,
//     Servers4,
//     Servers5
//  } from "../models/ServerModel.js";

//  // Data Untuk BIONACURE
//  export const getServers = async(req, res) =>{
//     try {
//         const response = await Servers.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServersById = async(req, res) =>{
    
// }

// export const createServers = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(201).json({msg: "Data Berhasil Didaftarkan"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server = await Servers.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server = await Servers.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };

// //Data Untuk CMM
// export const getServers1 = async(req, res) =>{
//     try {
//         const response = await Servers1.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServers1ById = async(req, res) =>{
    
// }

// export const createServers1 = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers1.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(200).json({msg: "Data Berhasil Didaftarkan"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers1 = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server1 = await Servers1.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server1) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server1.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers1 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server1 = await Servers1.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server1) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server1.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };

// //Data GAP
// export const getServers2 = async(req, res) =>{
//     try {
//         const response = await Servers2.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServers2ById = async(req, res) =>{
    
// }

// export const createServers2 = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers2.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(200).json({msg: "Data Berhasil Didaftarkan"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers2 = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server2 = await Servers2.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server2) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server2.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers2 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server2 = await Servers2.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server2) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server2.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };

// //Data Putikayo
// export const getServers3 = async(req, res) =>{
//     try {
//         const response = await Servers3.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServers3ById = async(req, res) =>{
    
// }

// export const createServers3 = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers3.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(200).json({msg: "Data Berhasil Didaftarkan"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers3 = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server3 = await Servers3.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server3) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server3.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers3 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server3 = await Servers3.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server3) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server3.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };

// // Data Sinar12
// export const getServers4 = async(req, res) =>{
//     try {
//         const response = await Servers4.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServers4ById = async(req, res) =>{
    
// }

// export const createServers4 = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers4.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(200).json({msg: "Data Berhasil Didaftarkan"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers4 = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server4 = await Servers4.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server4) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server4.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers4 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server4 = await Servers4.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server4) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server4.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };

// //Data SR12
// export const getServers5 = async(req, res) =>{
//     try {
//         const response = await Servers5.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message)
//     };
// }

// export const getServers5ById = async(req, res) =>{
    
// }

// export const createServers5 = async(req, res) =>{
//     const{type, ip_local, ip_public, os, Username, Password, core, ram} = req.body;
//     try {
//         await Servers5.create({
//             type: type,
//             ip_local: ip_local,
//             ip_public: ip_public,
//             os: os,
//             Username: Username,
//             Password: Password,
//             core: core,
//             ram: ram
//         });
//         res.status(200).json({msg: "Data Berhasil Didaftarkan", });
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

// export const updateServers5 = async(req, res) =>{
//     const { type, ip_local, ip_public, os, Username, Password, core, ram } = req.body;
//     const { id } = req.params;

//     try {
//         // Cari server berdasarkan ID
//         const server5 = await Servers5.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server5) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Update data dengan data baru
//         await server5.update({
//             type,
//             ip_local,
//             ip_public,
//             os,
//             Username,
//             Password,
//             core,
//             ram
//         });

//         // Kirim response sukses
//         res.status(200).json({ msg: "Data successfully updated" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to update data", error: error.message });
//     }
// };

// export const deleteServers5 = async(req, res) =>{
//     const { id } = req.params;

//     try {
//         // Cari data berdasarkan ID
//         const server5 = await Servers5.findByPk(id);

//         // Cek jika data tidak ditemukan
//         if (!server5) {
//             return res.status(404).json({ msg: "Server not found" });
//         }

//         // Hapus data
//         await server5.destroy();

//         // Kirim response sukses
//         res.status(200).json({ msg: "Server successfully deleted" });
//     } catch (error) {
//         // Kirim response error
//         res.status(500).json({ msg: "Failed to deleted", error: error.message });
//     }
// };