import mongoose from 'mongoose'

const redeemSchema = mongoose.Schema({
    no_trans: String,
    nocard: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    username_cashier: String,
    fullname_cashier: String,
    created_at: Date,
    updated_at: Date
})
export default mongoose.model('redeem', redeemSchema)