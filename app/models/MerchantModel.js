import mongoose from 'mongoose'

const merchantSchema = mongoose.Schema({

    merchant_code: {
        type: String,
        unique: true
    },
    merchant_name: {
        type: String,
        required: true
    },
    merchant_saldo: {
        type: Number,
        default: 0
    },
    created_at: Date,
    updated_at: Date
})

export default mongoose.model('merchant', merchantSchema)