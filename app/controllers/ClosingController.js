import moment from 'moment'
import topups from '../models/TopupModel'
import trans from '../models/TransModel'

const start = moment().startOf('day')

export const getClosingTop = (req, res) => {
    topups.find({ username_cashier: req.query.username, created_at: { $gte: start }, closing: false }).exec((err, topup) => {
        if (err) {
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.json({
            status: true,
            result: topup
        })
    })
}

export const addClosingTop = (req, res) => {
    topups.updateMany({ username_cashier: req.body.username, created_at: { $gte: start }, closing: false }, { $set: { closing: true, updated_at: new Date() } }).exec((err, topup) => {
        if (err) {
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.json({
            status: true,
            result: topup
        })
    })
}

export const getClosingTrans = (req, res) => {
    trans.find({ username_cashier: req.query.username, created_at: { $gte: start }, closing: false }).exec((err, trx) => {
        if (err) {
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.json({
            status: true,
            result: trx
        })
    })
}

export const addClosingTrans = (req, res) => {
    trans.updateMany({ username_cashier: req.body.username, created_at: { $gte: start }, closing: false }, { $set: { closing: true, updated_at: new Date() } }).exec((err, trx) => {
        if (err) {
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.json({
            status: true,
            result: trx
        })
    })
}
