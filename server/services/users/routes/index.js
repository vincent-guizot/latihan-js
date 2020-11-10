const router = require('express').Router();
const UserControllers = require('../controllers/userControllers');

router.get('/users', UserControllers.findAll);
router.get('/users/:UserId', UserControllers.findOneUser);
router.post('/users', UserControllers.addUser);
router.delete('/users/:UserId', UserControllers.deleteUser);
router.put('/users/:UserId', UserControllers.updateUser);

module.exports = router;