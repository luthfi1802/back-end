// import { Organization,
//     Organization1,
//     Organization2,
//     Organization3,
//     Organization4,
//     Organization5
//  } from "../models/OrganizationModel.js";

// // DATA UNTUK DB BIONAC
// //  export const getOrganization = async(req, res) =>{
// //     try {
// //         const response = await Organization.findAll({
// //             offset: 0,
// //             limit: 10
// //         });
// //         res.status(200).json(response);
// //     } catch (error) {
// //         console.log(error.message);
// //     };
// // }

// // export const getOrganizationById = async(req, res) =>{
// //    const { id } = req.params;
// //    try {
// //         const organization = await Organization.findByPk(id);

// //         if(!organization) return res.status(404).json({msg: 'Not Found'});
// //         res.status(200).json(organization);
// //    } catch (error) {
// //         res.status(500).json({msg: 'Failed', error: error.message})
// //    }

// // }
// // export const createOrganization = async(req, res) =>{
// //     const {name} = req.body;
// //     try {
// //         await Organization.create({
// //             name: name
// //         });
// //         res.status(201).json({msg: "Berhasil Cuyy"})
// //     } catch (error) {
// //         res.status(400).json({msg: error.message})
// //     }
// // }

// // export const updateOrganization = async(req, res) =>{
// //     const { name } = req.body;
// //     const { id } = req.params;

// //     try {
// //         // Cari organisasi berdasarkan ID
// //         const organization = await Organization.findByPk(id);

// //         // Cek jika organisasi tidak ditemukan
// //         if (!organization) {
// //             return res.status(404).json({ msg: "Organization not found" });
// //         }

// //         // Update organisasi dengan data baru
// //         await organization.update({ name });

// //         // Kirim response sukses
// //         res.status(201).json({ msg: "Berhasil Update Data" });
// //     } catch (error) {
// //         // Kirim response error
// //         res.status(500).json({ msg: "Gagal Update Data", error: error.message });
// //     }
// // };

// // export const deleteOrganization = async(req, res) =>{
// //     const { id } = req.params;

// //     try {
// //         // Cari organisasi berdasarkan ID
// //         const organization = await Organization.findByPk(id);

// //         // Hapus organisasi
// //         await organization.destroy();

// //         // Kirim response sukses
// //         res.status(201).json({ msg: "Berhasil Menghapus Data" });
// //     } catch (error) {
// //         // Kirim response error
// //         res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
// //     }
// // };

// // DATA UNTUK CMM
// export const getOrganization1 = async(req, res) =>{
//     try {
//         const response = await Organization1.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// export const getOrganization1ById = async(req, res) =>{
//     const { id } = req.params;
//     try {
//          const organization1 = await Organization1.findByPk(id);
 
//          if(!organization1) return res.status(404).json({msg: 'Not Found'});
//          res.status(200).json(organization);
//     } catch (error) {
//          res.status(500).json({msg: 'Failed', error: error.message})
//     }
 
//  }
//  export const createOrganization1 = async(req, res) =>{
//      const { name } = req.body;
//      try {
//          await Organization1.create({
//              name: name
//          });
//          res.status(201).json({msg: "data berhasil dibuat"})
//      } catch (error) {
//          res.status(400).json({msg: error.message})
//      }
//  }
 
//  export const updateOrganization1 = async(req, res) =>{
//      const { name } = req.body;
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization1 = await Organization1.findByPk(id);
 
//          // Cek jika organisasi tidak ditemukan
//          if (!organization1) {
//              return res.status(404).json({ msg: "Organization not found" });
//          }
 
//          // Update organisasi dengan data baru
//          await organization1.update({ name });
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Update Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Update Data", error: error.message });
//      }
//  };
 
//  export const deleteOrganization1 = async(req, res) =>{
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization1 = await Organization1.findByPk(id);
 
//          // Hapus organisasi
//          await organization1.destroy();
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Menghapus Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
//      }
//  };

//  // DATA UNTUK GAP
//  export const getOrganization2 = async(req, res) =>{
//     try {
//         const response = await Organization2.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     };
// }
 
//  export const getOrganization2ById = async(req, res) =>{
//     const { id } = req.params;
//     try {
//          const organization2 = await Organization2.findByPk(id);
 
//          if(!organization2) return res.status(404).json({msg: 'Not Found'});
//          res.status(200).json(organization2);
//     } catch (error) {
//          res.status(500).json({msg: 'Failed', error: error.message})
//     }
 
//  }
//  export const createOrganization2 = async(req, res) =>{
//      const {name} = req.body;
//      try {
//          await Organization2.create({
//              name: name
//          });
//          res.status(201).json({msg: "Berhasil Cuyy"})
//      } catch (error) {
//          res.status(400).json({msg: error.message})
//      }
//  }
 
//  export const updateOrganization2 = async(req, res) =>{
//      const { name } = req.body;
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization2 = await Organization2.findByPk(id);
 
//          // Cek jika organisasi tidak ditemukan
//          if (!organization2) {
//              return res.status(404).json({ msg: "Organization not found" });
//          }
 
//          // Update organisasi dengan data baru
//          await organization2.update({ name });
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Update Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Update Data", error: error.message });
//      }
//  };
 
//  export const deleteOrganization2 = async(req, res) =>{
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization2 = await Organization2.findByPk(id);
 
//          // Hapus organisasi
//          await organization2.destroy();
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Menghapus Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
//      }
//  };

//  //DATA UNTUK PUTIKAYO
//  export const getOrganization3 = async(req, res) =>{
//     try {
//         const response = await Organization3.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     };
// }
 
//  export const getOrganization3ById = async(req, res) =>{
//     const { id } = req.params;
//     try {
//          const organization3 = await Organization3.findByPk(id);
 
//          if(!organization3) return res.status(404).json({msg: 'Not Found'});
//          res.status(200).json(organization3);
//     } catch (error) {
//          res.status(500).json({msg: 'Failed', error: error.message})
//     }
 
//  }
//  export const createOrganization3 = async(req, res) =>{
//      const {name} = req.body;
//      try {
//          await Organization3.create({
//              name: name
//          });
//          res.status(201).json({msg: "Berhasil Cuyy"})
//      } catch (error) {
//          res.status(400).json({msg: error.message})
//      }
//  }
 
//  export const updateOrganization3 = async(req, res) =>{
//      const { name } = req.body;
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization3 = await Organization3.findByPk(id);
 
//          // Cek jika organisasi tidak ditemukan
//          if (!organization3) {
//              return res.status(404).json({ msg: "Organization not found" });
//          }
 
//          // Update organisasi dengan data baru
//          await organization3.update({ name });
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Update Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Update Data", error: error.message });
//      }
//  };
 
//  export const deleteOrganization3 = async(req, res) =>{
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization3 = await Organization3.findByPk(id);
 
//          // Hapus organisasi
//          await organization3.destroy();
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Menghapus Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
//      }
//  };

//  // DATA UNTUK SINAR 12
//  export const getOrganization4 = async(req, res) =>{
//     try {
//         const response = await Organization4.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     };
// }
 
//  export const getOrganization4ById = async(req, res) =>{
//     const { id } = req.params;
//     try {
//          const organization4 = await Organization4.findByPk(id);
 
//          if(!organization4) return res.status(404).json({msg: 'Not Found'});
//          res.status(200).json(organization4);
//     } catch (error) {
//          res.status(500).json({msg: 'Failed', error: error.message})
//     }
 
//  }
//  export const createOrganization4 = async(req, res) =>{
//      const {name} = req.body;
//      try {
//          await Organization4.create({
//              name: name
//          });
//          res.status(201).json({msg: "Berhasil Cuyy"})
//      } catch (error) {
//          res.status(400).json({msg: error.message})
//      }
//  }
 
//  export const updateOrganization4 = async(req, res) =>{
//      const { name } = req.body;
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization4 = await Organization4.findByPk(id);
 
//          // Cek jika organisasi tidak ditemukan
//          if (!organization4) {
//              return res.status(404).json({ msg: "Organization not found" });
//          }
 
//          // Update organisasi dengan data baru
//          await organization4.update({ name });
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Update Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Update Data", error: error.message });
//      }
//  };
 
//  export const deleteOrganization4 = async(req, res) =>{
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization4 = await Organization4.findByPk(id);
 
//          // Hapus organisasi
//          await organization4.destroy();
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Menghapus Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
//      }
//  };

//  //DATA UNTUK SR12
//  export const getOrganization5 = async(req, res) =>{
//     try {
//         const response = await Organization5.findAll({
//             offset: 0,
//             limit: 10
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     };
// }
 
//  export const getOrganization5ById = async(req, res) =>{
//     const { id } = req.params;
//     try {
//          const organization5 = await Organization5.findByPk(id);
 
//          if(!organization5) return res.status(404).json({msg: 'Not Found'});
//          res.status(200).json(organization5);
//     } catch (error) {
//          res.status(500).json({msg: 'Failed', error: error.message})
//     }
 
//  }
//  export const createOrganization5 = async(req, res) =>{
//      const {name} = req.body;
//      try {
//          await Organization5.create({
//              name: name
//          });
//          res.status(201).json({msg: "Berhasil Cuyy"})
//      } catch (error) {
//          res.status(400).json({msg: error.message})
//      }
//  }
 
//  export const updateOrganization5 = async(req, res) =>{
//      const { name } = req.body;
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization5 = await Organization5.findByPk(id);
 
//          // Cek jika organisasi tidak ditemukan
//          if (!organization5) {
//              return res.status(404).json({ msg: "Organization not found" });
//          }
 
//          // Update organisasi dengan data baru
//          await organization5.update({ name });
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Update Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Update Data", error: error.message });
//      }
//  };
 
//  export const deleteOrganization5 = async(req, res) =>{
//      const { id } = req.params;
 
//      try {
//          // Cari organisasi berdasarkan ID
//          const organization5 = await Organization5.findByPk(id);
 
//          // Hapus organisasi
//          await organization5.destroy();
 
//          // Kirim response sukses
//          res.status(201).json({ msg: "Berhasil Menghapus Data" });
//      } catch (error) {
//          // Kirim response error
//          res.status(500).json({ msg: "Gagal Mengapus Data", error: error.message });
//      }
//  };