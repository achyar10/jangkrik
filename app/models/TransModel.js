import mongoose from 'mongoose'

const transSchema = mongoose.Schema({

    no_trans: String,
    nocard: {
        type: String,
        required: true
    },
    fullname: String,
    total_amount: {
        type: Number,
        default: 0
    },
    user_cashier: String,
    closing: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date
    
})
export default mongoose.model('transaction', transSchema)