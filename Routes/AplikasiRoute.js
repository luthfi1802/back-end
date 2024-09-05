import express from "express";
import { getAplikasi,
    getAplikasiById,
    createAplikasi,
    updateAplikasi,
    deleteAplikasi,
    getAplikasi1,
    createAplikasi1,
    getAplikasiById1,
    updateAplikasi1,
    deleteAplikasi1,
    getAplikasi2,
    getAplikasiById2,
    createAplikasi2,
    updateAplikasi2,
    deleteAplikasi2,
    getAplikasi3,
    createAplikasi3,
    getAplikasiById3,
    updateAplikasi3,
    deleteAplikasi3,
    getAplikasi4,
    getAplikasiById4,
    createAplikasi4,
    updateAplikasi4,
    deleteAplikasi4,
    getAplikasi5,
    getAplikasiById5,
    createAplikasi5,
    updateAplikasi5,
    deleteAplikasi5
 } from "../contollers/Aplikasi.js";

const router = express.Router();

router.get('/apkcmm', getAplikasi)
router.get('/apkcmm/:id', getAplikasiById)
router.post('/apkcmm', createAplikasi)
router.patch('/apkcmm/:id', updateAplikasi)
router.delete('/apkcmm/:id', deleteAplikasi)

router.get('/apkgap', getAplikasi1)
router.get('/apkgap/:id', getAplikasiById1)
router.post('/apkgap', createAplikasi1)
router.patch('/apkgap/:id', updateAplikasi1)
router.delete('/apkgap/:id', deleteAplikasi1)

router.get('/apkputikayo', getAplikasi2)
router.get('/apkputikayo/:id', getAplikasiById2)
router.post('/apkputikayo', createAplikasi2)
router.patch('/apkputikayo/:id', updateAplikasi2)
router.delete('/apkputikayo/:id', deleteAplikasi2)

router.get('/apksinar12', getAplikasi3)
router.get('/apksinar12/:id', getAplikasiById3)
router.post('/apksinar12', createAplikasi3)
router.patch('/apksinar12/:id', updateAplikasi3)
router.delete('/apksinar12/:id', deleteAplikasi3)

router.get('/apksr12', getAplikasi4)
router.get('/apksr12/:id', getAplikasiById4)
router.post('/apksr12', createAplikasi4)
router.patch('/apksr12/:id', updateAplikasi4)
router.delete('/apksr12/:id', deleteAplikasi4)

router.get('/apkbionac', getAplikasi5)
router.get('/apkbionac/:id', getAplikasiById5)
router.post('/apkbionac', createAplikasi5)
router.patch('/apkbionac/:id', updateAplikasi5)
router.delete('/apkbionac/:id', deleteAplikasi5)

export default router;