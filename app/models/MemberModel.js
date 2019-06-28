import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({

    nocard: {
        type: String,
        unique: true,
    },
    fullname: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        default: 0
    },
    created_at: Date,
    updated_at: Date
})

export default mongoose.model('member', memberSchema)