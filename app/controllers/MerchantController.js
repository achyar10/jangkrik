import merchants from '../models/MerchantModel'

export const getMerchant = (req, res) => {
    merchants.find().exec((error, merchant) => {
        if (error) {
            return res.status(400).json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': merchant
        })
    })
}

export const addMerchant = (req, res) => {
    const data = {
        merchant_code: getRandom(4),
        merchant_name: req.body.merchant_name,
        merchant_saldo: req.body.merchant_saldo,
        created_at: new Date(),
        updated_at: '',
    }
    const add = new merchants(data)
    add.save((error, merchant) => {
        if (error) {
            return res.status(400).json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': merchant
        })
    })
}

export const updateMerchant = (req, res) => {
    merchants.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, merchant) => {
        if (err) {
            return res.status(400).json({
                'status': false,
                'message': err
            })
        }
        return res.json({
            'status': true,
            'message': 'Update data success',
            merchant
        })
    })
}

function getRandom(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}