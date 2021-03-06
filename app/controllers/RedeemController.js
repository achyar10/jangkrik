import redeems from '../models/RedeemModel'
import members from '../models/MemberModel'

export const getRedeem = (req, res) => {
    redeems.find().exec((err, redeem) => {
        if(err){
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.status(200).json({
            status: true,
            result: redeem
        })
    })
}

export const addRedeem = (req, res) => {

    members.find({ nocard: req.body.nocard }).exec((err, member) => {
        if (err) {
            return res.status(400).json({
                'status': false,
                'result': err
            })
        }
        if (member.length < 1) {
            return res.status(400).json({
                status: false,
                result: 'Member not found!'
            })
        } else {
            if (req.body.amount > member[0].saldo) {
                return res.status(401).json({
                    status: false,
                    result: 'Insufficient balance'
                })
            }
            redeems.find().sort({ $natural: -1 }).limit(1).exec((error, trx) => {
                var count = trx.length
                var lastNum
                if (count < 1) {
                    lastNum = '000001'
                } else {
                    let no = trx[0].no_trans
                    let pieces = no.split('/')
                    lastNum = pieces[0]
                    lastNum = parseInt(lastNum)
                    lastNum++;
                    lastNum = ("000000" + lastNum).substr(-6)
                }
                let d = new Date()
                let year = d.getFullYear()
                let month = d.getMonth() + 1
                month = (`0${month}`).slice(-2);
                const data = {
                    no_trans: lastNum + '/Redeem/' + year + month,
                    nocard: req.body.nocard,
                    amount: req.body.amount,
                    username_cashier: req.body.username_cashier,
                    fullname_cashier: req.body.fullname_cashier,
                    created_at: new Date(),
                    updated_at: '',
                }
                const add = new redeems(data)
                add.save((error, trx) => {
                    if (error) {
                        return res.status(400).json({
                            'status': false,
                            'result': error
                        })
                    }
                    members.findOneAndUpdate({ nocard: data.nocard }, { $inc: { saldo: -data.amount }, updated_at: new Date() }, (er, member) => {
                        return res.json({
                            'status': true,
                            'result': trx
                        })
                    })
                })
            })
        }
    })
}