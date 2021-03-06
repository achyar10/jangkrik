import mongoose from 'mongoose'

const transSchema = mongoose.Schema({

    no_trans: String,
    nocard: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    store_code: String,
    username_cashier: String,
    fullname_cashier: String,
    closing: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date
    
})
export default mongoose.model('transaction', transSchema)