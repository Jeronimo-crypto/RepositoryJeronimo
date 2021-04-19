const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccoutsByCustomer);
router.post('/accounts', AccountController.createAccount);
router.post('/customers', CustomerController.create);
router.delete('/accounts/:id', AccountController.deleteAccount);
router.put('/accounts/:id', AccountController.withdrawBalance);
router.put('/accounts/consign/:id', AccountController.consignBalance);
router.put('/accounts/one/:id/two/:idTwo', AccountController.transferFromOneAccountToAnother);

module.exports = router;