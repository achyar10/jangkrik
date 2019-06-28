import trans from '../models/TransModel'

export const getTrans = (req, res) => {
    trans.find().exec((err, trx) => {
        if(err) {
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

export const addTrans = (req, res) => {

}