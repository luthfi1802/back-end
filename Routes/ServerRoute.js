import express from "express";
import { getServers,
    getServersById,
    createServers,
    updateServers,
    deleteServers,
    getServers1,
    getServers1ById,
    createServers1,
    updateServers1,
    deleteServers1,
    getServers2,
    getServers2ById,
    createServers2,
    updateServers2,
    deleteServers2,
    getServers3,
    getServers3ById,
    createServers3,
    updateServers3,
    deleteServers3,
    getServers4,
    getServers4ById,
    createServers4,
    updateServers4,
    deleteServers4,
    getServers5,
    getServers5ById,
    createServers5,
    updateServers5,
    deleteServers5
 } from "../contollers/Server.js";

const router = express.Router();

router.get('/bions', getServers)
router.get('/bions/:id', getServersById)
router.post('/bions', createServers)
router.patch('/bions/:id', updateServers)
router.delete('/bions/:id', deleteServers)

router.get('/cmms', getServers1)
router.get('/cmms/:id', getServers1ById)
router.post('/cmms', createServers1)
router.patch('/cmms/:id', updateServers1)
router.delete('/cmms/:id', deleteServers1)

router.get('/gaps', getServers2)
router.get('/gaps/:id', getServers2ById)
router.post('/gaps', createServers2)
router.patch('/gaps/:id', updateServers2)
router.delete('/gaps/:id', deleteServers2)

router.get('/ptkayos', getServers3)
router.get('/ptkayos/:id', getServers3ById)
router.post('/ptkayos', createServers3)
router.patch('/ptkayos/:id', updateServers3)
router.delete('/ptkayos/:id', deleteServers3)

router.get('/sinars12', getServers4)
router.get('/sinars12/:id', getServers4ById)
router.post('/sinars12', createServers4)
router.patch('/sinars12/:id', updateServers4)
router.delete('/sinars12/:id', deleteServers4)

router.get('/ssr12', getServers5)
router.get('/ssr12/:id', getServers5ById)
router.post('/ssr12', createServers5)
router.patch('/ssr12/:id', updateServers5)
router.delete('/ssr12/:id', deleteServers5)

export default router;