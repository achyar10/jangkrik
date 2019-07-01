import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({

    nocard: {
        type: String,
        required: true,
        unique: true,
    },
    saldo: {
        type: Number,
        default: 0
    },
    created_at: Date,
    updated_at: Date
})

export default mongoose.model('member', memberSchema)