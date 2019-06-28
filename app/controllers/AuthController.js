import users from '../models/UserModel'
import bcrypt from 'bcrypt'

export const loginCashier = (req, res) => {

    users.find({ username: req.body.username }).exec((err, user) => {
        if(err){
            return res.status(400).json({
                'status': false,
                'result': err
            })
        }
        if (user.length < 1) {
            return res.status(401).json({
                'status': false,
                'result': 'Username tidak terdaftar'
            })
        } else {
            bcrypt.compare(req.body.password, user[0].password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        'status': false,
                        'result': error
                    })
                }
                if (result) {
                    return res.status(200).json({
                        'status': true,
                        'result': user
                    })
                }
                return res.status(401).json({
                    'status': false,
                    'result': 'Password Salah!'
                })
            })
        }
    })

}