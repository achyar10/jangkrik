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
        nocard: getRandom(10),
        fullname: req.body.fullname,
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

function getRandom(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}