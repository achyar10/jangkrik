import users from '../models/UserModel'
import bcrypt from 'bcrypt'

export const getUser = (req, res) => {
    users.find().exec((err, user) => {
        if (err) {
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        return res.json({
            status: true,
            result: user
        })
    })
}

export const addUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const data = {
                username: req.body.username,
                password: hash,
                merchant_code: req.body.merchant_code,
                merchant_name: req.body.merchant_name,
                created_at: new Date(),
                updated_at: '',
            }
            const add = new users(data)
            add.save((error, user) => {
                if (error) {
                    return res.status(400).json({
                        'status': false,
                        'result': error
                    })
                }
                return res.json({
                    'status': true,
                    'result': user
                })
            })
        }
    })
}