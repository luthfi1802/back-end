import express from "express";
import { getDb_database,
    getDb_databaseById,
    createDb_database,
    updateDb_database,
    deleteDb_database,
    getDb_database1,
    getDb_database1ById,
    createDb_database1,
    updateDb_database1,
    deleteDb_database1,
    getDb_database2,
    getDb_database2ById,
    createDb_database2,
    updateDb_database2,
    deleteDb_database2,
    getDb_database3,
    getDb_database3ById,
    createDb_database3,
    updateDb_database3,
    deleteDb_database3,
    getDb_database4,
    getDb_database4ById,
    createDb_database4,
    updateDb_database4,
    deleteDb_database4,
    getDb_database5,
    getDb_database5ById,
    createDb_database5,
    updateDb_database5,
    deleteDb_database5
 } from "../contollers/Db_database.js";

 const router = express.Router();

router.get('/dbbion', getDb_database)
router.get('/dbbion/:id', getDb_databaseById)
router.post('/dbbion', createDb_database)
router.patch('/dbbion/:id', updateDb_database)
router.delete('/dbbion/:id', deleteDb_database)

router.get('/dbcmm', getDb_database1)
router.get('/dbcmm/:id', getDb_database1ById)
router.post('/dbcmm', createDb_database1)
router.patch('/dbcmm/:id', updateDb_database1)
router.delete('/dbcmm/:id', deleteDb_database1)

router.get('/dbgap', getDb_database2)
router.get('/dbgap/:id', getDb_database2ById)
router.post('/dbgap', createDb_database2)
router.patch('/dbgap/:id', updateDb_database2)
router.delete('/dbgap/:id', deleteDb_database2)

router.get('/dbptkayo', getDb_database3)
router.get('/dbptkayo/:id', getDb_database3ById)
router.post('/dbptkayo', createDb_database3)
router.patch('/dbptkayo/:id', updateDb_database3)
router.delete('/dbptkayo/:id', deleteDb_database3)

router.get('/dbsinar12', getDb_database4)
router.get('/dbsinar12/:id', getDb_database4ById)
router.post('/dbsinar12', createDb_database4)
router.patch('/dbsinar12/:id', updateDb_database4)
router.delete('/dbsinar12/:id', deleteDb_database4)

router.get('/dbsr12', getDb_database5)
router.get('/dbsr12/:id', getDb_database5ById)
router.post('/dbsr12', createDb_database5)
router.patch('/dbsr12/:id', updateDb_database5)
router.delete('/dbsr12/:id', deleteDb_database5)

export default router;