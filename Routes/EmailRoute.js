import express from "express";
import { getEmail,
    getEmailById,
    createEmail,
    updateEmail,
    deleteEmail,
    getEmail1,
    getEmail1ById,
    createEmail1,
    updateEmail1,
    deleteEmail1,
    getEmail2,
    getEmail2ById,
    createEmail2,
    updateEmail2,
    deleteEmail2,
    getEmail3,
    getEmail3ById,
    createEmail3,
    updateEmail3,
    deleteEmail3,
    getEmail4,
    getEmail4ById,
    createEmail4,
    updateEmail4,
    deleteEmail4,
    getEmail5,
    getEmail5ById,
    createEmail5,
    updateEmail5,
    deleteEmail5
 } from "../contollers/Email_.js";

 const router = express.Router();

router.get('/mailcmm', getEmail)
router.get('/mailcmm/:id', getEmailById)
router.post('/mailcmm', createEmail)
router.patch('/mailcmm/:id', updateEmail)
router.delete('/mailcmm/:id', deleteEmail)

router.get('/mailgap', getEmail1)
router.get('/mailgap/:id', getEmail1ById)
router.post('/mailgap', createEmail1)
router.patch('/mailgap/:id', updateEmail1)
router.delete('/mailgap/:id', deleteEmail1)

router.get('/mailptkayo', getEmail2)
router.get('/mailptkayo/:id', getEmail2ById)
router.post('/mailptkayo', createEmail2)
router.patch('/mailptkayo/:id', updateEmail2)
router.delete('/mailptkayo/:id', deleteEmail2)

router.get('/mailsinar12', getEmail3)
router.get('/mailsinar12/:id', getEmail3ById)
router.post('/mailsinar12', createEmail3)
router.patch('/mailsinar12/:id', updateEmail3)
router.delete('/mailsinar12/:id', deleteEmail3)

router.get('/mailsr12', getEmail4)
router.get('/mailsr12/:id', getEmail4ById)
router.post('/mailsr12', createEmail4)
router.patch('/mailsr12/:id', updateEmail4)
router.delete('/mailsr12/:id', deleteEmail4)

router.get('/mailbion', getEmail5)
router.get('/mailbion/:id', getEmail5ById)
router.post('/mailbion', createEmail5)
router.patch('/mailbion/:id', updateEmail5)
router.delete('/mailbion/:id', deleteEmail5)

export default router;