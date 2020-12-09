const { Router } = require('express');
const router = Router();

const { getusers, createusers, getuserbyid, deleteusers, updateusers } = require('../controllers/index.controller');

router.get('/users', getusers);
router.get('/users/:id', getuserbyid);
router.post('/users', createusers);
router.delete('/users/:id', deleteusers);
router.put('/users/:id', updateusers);

module.exports = router;

