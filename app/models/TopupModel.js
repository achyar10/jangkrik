import mongoose from 'mongoose'

const topupSchema = mongoose.Schema({

    no_trans: String,
    nocard: String,
    fullname: String,
    payment_type: {
        type: String,
        enum: ['CASH', 'DEBIT/CREDIT'],
        default: 'CASH'
    },
    amount: {
        type: Number,
        required: true
    },
    bank: String,
    ccno: Number,
    approval_code: Number,
    user: String,
    closing: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date

})
export default mongoose.model('topup', topupSchema)