import { Aplikasi,
    Aplikasi1,
    Aplikasi2,
    Aplikasi3,
    Aplikasi4,
    Aplikasi5
 } from "../models/AplikasiModel.js";


 // DATA UNTUK CMM
 export const getAplikasi = async(req, res) => {
    try {
        // const { offset = 0, limit = 10 } = req.query
        // const offetInt = parseInt(offset, 10);
        // const limitInt = parseInt(limit, 10);

        // if (isNaN(offetInt) || isNaN(limitInt) || offetInt < 0 || limitInt <= 0){
        //     return res.status(400).json({msg: 'Invalid'})
        // }
        const response = await Aplikasi.findAll({
            offset: 0,
            limit: 20
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
 }

 export const getAplikasiById = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi = await Aplikasi.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(201).json(aplikasi);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};


 export const createAplikasi = async(req, res) =>{
    // Mengambil data dari req.body
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

    try {
        // Membuat data baru dalam tabel Aplikasi
        await Aplikasi.create({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Mengirim respons sukses
        res.status(201).json({ msg: 'Data berhasil didaftarkan', });
    } catch (error) {
        // Mengirim respons error
        res.status(400).json({ msg: error.message });
    }
};

export const updateAplikasi = async(req, res) =>{
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi = await Aplikasi.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui', aplikasi });
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
};

export const deleteAplikasi = async(req, res) =>{
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi = await Aplikasi.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
};


// DATA BUAT GAP
export const getAplikasi1 = async (req, res) => {
    try {
        const response = await Aplikasi1.findAll({
            offset:0,
            limit: 10
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
};

export const getAplikasiById1 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi1 = await Aplikasi1.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi1) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(200).json(aplikasi1);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};

export const createAplikasi1 = async(req, res) => {
     // Mengambil data dari req.body
     const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

     try {
         // Membuat data baru dalam tabel Aplikasi
          await Aplikasi1.create({
             vm_id,
             ip_public,
             port_int,
             port_ext,
             domain,
             appname,
             username,
             password
         });
 
         // Mengirim respons sukses
         res.status(201).json({ msg: 'Data berhasil didaftarkan' });
     } catch (error) {
         // Mengirim respons error
         res.status(400).json({ msg: error.message });
     }
 };

 export const updateAplikasi1 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi1 = await Aplikasi1.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi1) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi1.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui', aplikasi1 });
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
 }

 export const deleteAplikasi1 = async(req, res)=> {
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi1 = await Aplikasi1.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi1) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi1.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
 };

// Data Untuk PutiKayo
export const getAplikasi2 = async (req, res) => {
    try {
        const response = await Aplikasi2.findAll({
            offset:0,
            limit: 10
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
};

export const getAplikasiById2 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi2 = await Aplikasi2.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi2) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(200).json(aplikasi2);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};

export const createAplikasi2 = async(req, res) => {
     // Mengambil data dari req.body
     const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

     try {
         // Membuat data baru dalam tabel Aplikasi
        await Aplikasi2.create({
             vm_id,
             ip_public,
             port_int,
             port_ext,
             domain,
             appname,
             username,
             password
         });
 
         // Mengirim respons sukses
         res.status(201).json({ msg: 'Data berhasil didaftarkan' });
     } catch (error) {
         // Mengirim respons error
         res.status(400).json({ msg: error.message });
     }
 };

 export const updateAplikasi2 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi2 = await Aplikasi2.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi2) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi2.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui', aplikasi2 });
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
 }

 export const deleteAplikasi2 = async(req, res)=> {
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi2 = await Aplikasi2.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi2) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi2.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
 };

// DATA UNTUK Sinar12
export const getAplikasi3 = async (req, res) => {
    try {
        const response = await Aplikasi3.findAll({
            offset:0,
            limit: 10
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
};

export const getAplikasiById3 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi3 = await Aplikasi3.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi3) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(200).json(aplikasi3);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};

export const createAplikasi3 = async(req, res) => {
     // Mengambil data dari req.body
     const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

     try {
         // Membuat data baru dalam tabel Aplikasi
         const aplikasi3 = await Aplikasi3.create({
             vm_id,
             ip_public,
             port_int,
             port_ext,
             domain,
             appname,
             username,
             password
         });
 
         // Mengirim respons sukses
         res.status(201).json({ msg: 'Data berhasil didaftarkan' });
     } catch (error) {
         // Mengirim respons error
         res.status(400).json({ msg: error.message });
     }
 };

 export const updateAplikasi3 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi3 = await Aplikasi3.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi3) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi3.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui'});
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
 }

 export const deleteAplikasi3 = async(req, res)=> {
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi3 = await Aplikasi3.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi3) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi3.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
 };

 // Data UNTUK SR12
 export const getAplikasi4 = async (req, res) => {
    try {
        const response = await Aplikasi4.findAll({
            offset:0,
            limit: 10
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
};

export const getAplikasiById4 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi4 = await Aplikasi4.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi4) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(200).json(aplikasi4);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};

export const createAplikasi4 = async(req, res) => {
     // Mengambil data dari req.body
     const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

     try {
         // Membuat data baru dalam tabel Aplikasi
         const aplikasi4 = await Aplikasi4.create({
             vm_id,
             ip_public,
             port_int,
             port_ext,
             domain,
             appname,
             username,
             password
         });
 
         // Mengirim respons sukses
         res.status(201).json({ msg: 'Data berhasil didaftarkan', aplikasi4 });
     } catch (error) {
         // Mengirim respons error
         res.status(400).json({ msg: error.message });
     }
 };

 export const updateAplikasi4 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi4 = await Aplikasi4.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi4) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi4.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui', aplikasi4 });
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
 }

 export const deleteAplikasi4 = async(req, res)=> {
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi4 = await Aplikasi4.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi4) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi4.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
 };

 // DATA UNTUK BIONACURE
 export const getAplikasi5 = async (req, res) => {
    try {
        const response = await Aplikasi5.findAll({
            offset:0,
            limit: 10
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
};

export const getAplikasiById5 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter

    try {
        // Cari data berdasarkan ID
        const aplikasi5 = await Aplikasi5.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi5) {
            return res.status(404).json({ msg: "not found" });
        }

        // Kirim respon kalau data ditemukan
        res.status(200).json(aplikasi5);
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: "Failed", error: error.message });
    }
};

export const createAplikasi5 = async(req, res) => {
     // Mengambil data dari req.body
     const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body;

     try {
         // Membuat data baru dalam tabel Aplikasi
         const aplikasi5 = await Aplikasi5.create({
             vm_id,
             ip_public,
             port_int,
             port_ext,
             domain,
             appname,
             username,
             password
         });
 
         // Mengirim respons sukses
         res.status(201).json({ msg: 'Data berhasil didaftarkan', aplikasi5 });
     } catch (error) {
         // Mengirim respons error
         res.status(400).json({ msg: error.message });
     }
 };

 export const updateAplikasi5 = async(req, res) => {
    const { id } = req.params; // Mengambil ID dari URL parameter
    const { vm_id, ip_public, port_int, port_ext, domain, appname, username, password } = req.body; // Mengambil data dari req.body

    try {
        // Cari data berdasarkan ID
        const aplikasi5 = await Aplikasi5.findByPk(id);

        // Cek jika data di tabel aplikasi tidak ditemukan
        if (!aplikasi5) {
            return res.status(404).json({ msg: "Aplikasi not found" });
        }

        // Perbarui data tabel dengan data baru
        await aplikasi5.update({
            vm_id,
            ip_public,
            port_int,
            port_ext,
            domain,
            appname,
            username,
            password
        });

        // Kirim respons sukses
        res.status(200).json({ msg: 'Data berhasil diperbarui', aplikasi5 });
    } catch (error) {
        // Kirim respons error
        res.status(500).json({ msg: 'Failed to update aplikasi', error: error.message });
    }
 }

 export const deleteAplikasi5 = async(req, res)=> {
    const { id } = req.params;

    try {
        // Cari data berdasarkan ID
        const aplikasi5 = await Aplikasi5.findByPk(id);

        // Cek jika data tidak ditemukan
        if (!aplikasi5) {
            return res.status(404).json({ msg: "Server not found" });
        }

        // Hapus data
        await aplikasi5.destroy();

        // Kirim response sukses
        res.status(200).json({ msg: "Data Berhasil Di Hapus" });
    } catch (error) {
        // Kirim response error
        res.status(500).json({ msg: "Gagal Menghapus Data", error: error.message });
    }
 }