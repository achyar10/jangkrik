import express from 'express'
import * as memberController from '../controllers/MemberController'
import * as merchantController from '../controllers/MerchantController'
import * as topupController from '../controllers/TopupController'
import * as userController from '../controllers/UserController'
import * as authController from '../controllers/AuthController'
import * as transController from '../controllers/TransController'
import * as closingController from '../controllers/ClosingController'

const route = express.Router()

// Member
route.route('/member').get(memberController.getMember)
route.route('/member').post(memberController.addMember)

// Merchant
route.route('/merchant').get(merchantController.getMerchant)
route.route('/merchant').post(merchantController.addMerchant)
route.route('/merchant').put(merchantController.updateMerchant)

// Topup
route.route('/topup').get(topupController.getTopup)
route.route('/topup').post(topupController.addTopup)

// User
route.route('/user').get(userController.getUser)
route.route('/user').post(userController.addUser)

// Transaction
route.route('/trans').get(transController.getTrans)
route.route('/trans').post(transController.addTrans)

// Closing
route.route('/closingTop/').get(closingController.getClosingTop)
route.route('/closingTop').post(closingController.addClosingTop)
route.route('/closingTrans').get(closingController.getClosingTrans)
route.route('/closingTrans').post(closingController.addClosingTrans)

// Auth
route.route('/login').post(authController.loginCashier)

export default route


