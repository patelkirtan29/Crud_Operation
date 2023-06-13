const { Router } = require('express');
const apiController = require('../controllers/Api.controller');
const authController = require('../controllers/auth.controller');
const { requireAuth, checkRole, authorize } = require('../middleware/auth.midlleware');

const router = Router();

//auth controller
router.get('/login', requireAuth, authController.login_get);
router.post('/login', authController.login_post);


//apis for the user
router.get('/users', checkRole, apiController.user);
router.post('/users', apiController.useradd);
router.put('/users/:id', apiController.userupdate);
router.delete('/users/:id', apiController.userdelete);


module.exports = router;