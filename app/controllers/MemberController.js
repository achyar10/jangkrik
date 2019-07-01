import members from '../models/MemberModel'

export const getMember = (req, res) => {
    members.find().exec((error, member) => {
        if (error) {
            return res.status(400).json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': member
        })
    })
}

export const addMember = (req, res) => {

    const data = {
        nocard: req.body.nocard,
        saldo: req.body.saldo,
        created_at: new Date(),
        updated_at: '',
    }
    const add = new members(data)
    add.save((error, member) => {
        if (error) {
            return res.status(400).json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': member
        })
    })
}

export const cekSaldo = (req, res) => {
    members.find({ nocard: req.body.nocard }).exec((err, member) => {
        if(err){
            return res.status(400).json({
                status: false,
                result: err
            })
        }
        if(member.length < 1){
            return res.status(200).json({
                status: false,
                result: 'member not found!'
            })
        } else {
            const saldo = member[0].saldo
            return res.status(200).json({
                status: true,
                result: saldo
            })
        }
    })
}

// function getRandom(length) {
//     return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
// }