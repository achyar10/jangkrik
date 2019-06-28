import express from 'express'
import * as memberController from '../controllers/MemberController'
import * as merchantController from '../controllers/MerchantController'
import * as topupController from '../controllers/TopupController'
import * as userController from '../controllers/UserController'
import * as authController from '../controllers/AuthController'
import * as transController from '../controllers/TransController'

const route = express.Router()

// Member
route.route('/member').get(memberController.getMember)
route.route('/member').post(memberController.addMember)
route.route('/member').put(memberController.updateMember)

// Merchant
route.route('/merchant').get(merchantController.getMerchant)
route.route('/merchant').post(merchantController.addMerchant)
route.route('/merchant').put(merchantController.updateMerchant)

// Topup
route.route('/topup').get(topupController.getTopup)
route.route('/topup').post(topupController.addTopup)
route.route('/topup').put(topupController.updateTopup)

// User
route.route('/user').get(userController.getUser)
route.route('/user').post(userController.addUser)
// route.route('/user').put(userController.updateUser)

// Transaction
route.route('/trans').get(transController.getTrans)
route.route('/trans').post(transController.addTrans)

// Auth
route.route('/login').post(authController.loginCashier)

export default route


