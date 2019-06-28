import topups from '../models/TopupModel'

export const getTopup = (req, res) => {
    topups.find().exec((err, topup) => {
        if(err){
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

export const addTopup = (req, res) => {
    topups.find().sort({ $natural: -1 }).limit(1).exec((err, topup) => {
        var count = topup.length
        var lastNum
        if(count < 1){
            lastNum = '000001'
        } else {
            let no = topup[0].no_trans
            let pieces = no.split('/')
            lastNum = pieces[0]

            lastNum = parseInt(lastNum)
            lastNum++;
            lastNum = ("000000" + lastNum).substr(-6)
        }
        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth()+1
        month = (`0${month}`).slice(-2);
        const data = {
            no_trans: lastNum + '/T/' + year+month,
            nocard: req.body.nocard,
            fullname: req.body.fullname,
            payment_type: req.body.payment_type,
            amount: req.body.amount,
            bank: req.body.bank,
            ccno: req.body.ccno,
            approval_code: req.body.approval_code,
            user: req.body.user,
            closing: req.body.closing,
            created_at: new Date(),
            updated_at: '',
        }
        const add = new topups(data)
        add.save((error, topup) => {
            if (error) {
                return res.status(400).json({
                    'status': false,
                    'result': error
                })
            }
            return res.json({
                'status': true,
                'result': topup
            })
        })

    })
}

export const updateTopup = (req, res) => {
    topups.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, topup) => {
        if (err) {
            return res.status(400).json({
                'status': false,
                'message': err
            })
        }
        return res.json({
            'status': true,
            'message': 'Update data success',
            topup
        })
    })
}