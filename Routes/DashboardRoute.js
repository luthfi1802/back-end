import express from "express";
import { Aplikasi,
    Aplikasi1,
    Aplikasi2,
    Aplikasi3,
    Aplikasi4,
    Aplikasi5
 } from "../models/AplikasiModel.js";
 import { Db_database,
    Db_database1,
    Db_database2,
    Db_database3,
    Db_database4,
    Db_database5
  } from "../models/Db_databaseModel.js";
import { Domain,
    Domain1,
    Domain2,
    Domain3,
    Domain4,
    Domain5
 } from "../models/DomainModel.js";
import { Email_,
    Email_1,
    Email_2,
    Email_3,
    Email_4,
    Email_5
 } from "../models/EmailModel_.js";
import { Servers,
    Servers1,
    Servers2,
    Servers3,
    Servers4,
    Servers5
 } from "../models/ServerModel.js";
// import { bionacure, dbcmm, dbgap, dbputikayo, dbsinar12, dbsr12 } from "../config/database.js";

const router = express.Router();

router.get('/total-data', async (req, res) => {
    try {
        // Hitung jumlah data dari masing-masing tabel aplikasi
        const countAplikasi = await Aplikasi.count();
        const countAplikasi1 = await Aplikasi1.count();
        const countAplikasi2 = await Aplikasi2.count();
        const countAplikasi3 = await Aplikasi3.count();
        const countAplikasi4 = await Aplikasi4.count();
        const countAplikasi5 = await Aplikasi5.count();
       
        const countDb_database = await Db_database.count();
        const countDb_database1 = await Db_database1.count();
        const countDb_database2 = await Db_database2.count();
        const countDb_database3 = await Db_database3.count();
        const countDb_database4 = await Db_database4.count();
        const countDb_database5 = await Db_database5.count();

        const countDomain = await Domain.count();
        const countDomain1 = await Domain1.count();
        const countDomain2 = await Domain2.count();
        const countDomain3 = await Domain3.count();
        const countDomain4 = await Domain4.count();
        const countDomain5 = await Domain5.count();

        const countEmail_ = await Email_.count();
        const countEmail_1 = await Email_1.count();
        const countEmail_2 = await Email_2.count();
        const countEmail_3 = await Email_3.count();
        const countEmail_4 = await Email_4.count();
        const countEmail_5 = await Email_5.count();

        const countServers = await Servers.count();
        const countServers1 = await Servers1.count();
        const countServers2 = await Servers2.count();
        const countServers3 = await Servers3.count();
        const countServers4 = await Servers4.count();
        const countServers5 = await Servers5.count();

        const totalEmail = countEmail_ + countEmail_1 + countEmail_2 + countEmail_3 + countEmail_4 + countEmail_5;
        const totalAplikasi = countAplikasi + countAplikasi1 + countAplikasi2 + countAplikasi3 + countAplikasi4 + countAplikasi5;
        const totalDb_database = countDb_database + countDb_database1 + countDb_database2 + countDb_database3 + countDb_database4 + countDb_database5;
        const totalDomain = countDomain + countDomain1 + countDomain2 + countDomain3 + countDomain4 + countDomain5;
        const totalServers = countServers + countServers1 + countServers2 + countServers3 + countServers4 + countServers5;

        // Kirim respons dengan jumlah total data
        // res.status(200).json({
            // bionacure: {
            //     Aplikasi: countAplikasi,
            //     Db_database: countDb_database
            // },
            // dbcmm: {
            //     Aplikasi: countAplikasi1,
            //     Db_database: countDb_database1
            // },
            // dbgap:{
            //     Aplikasi: countAplikasi2,
            //     Db_database: countDb_database2
            // },
            // dbputikayo:{
            //     Aplikasi: countAplikasi3,
            //     Db_database: countDb_database3
            // },
            // dbsr12:{
            //     Aplikasi: countAplikasi4,
            //     Db_database: countDb_database4
            // },
            // dbsr12:{
            //     Aplikasi: countAplikasi5,
            //     Db_database: countDb_database5
            // },
        // });
        res.status(200).json({
            totalAplikasi,
            totalDb_database,
            totalDomain,
            totalEmail,
            totalServers
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});


export default router;
