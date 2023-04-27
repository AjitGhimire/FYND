var express = require('express');

var studentController = require('../src/student/studentController');
var productController = require('../src/student/productController');
const paymentController = require('../src/student/paymentController');
const router= express.Router();


router.route('/student/login').post(studentController.loginstudentControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);
router.route('/student/fetch').post(studentController.loginstudentidControllerFn);


router.route('/product/cart').post(productController.createCartControllerFn);
// router.route('/product/fetchcart').get(productController.fetchCartControllerFn);
router.route('/product/fetchcartspecific').post(productController.fetchCartControllerFnspecific);
router.route('/product/deletecartspecific').post(productController.priceCartControllerFnspecific);


router.route('/payment/details').post(paymentController.createpaymentControllerFn);
router.route('/payment/detailsatonce').post(paymentController.createpaymentatonceControllerFn);
module.exports = router;