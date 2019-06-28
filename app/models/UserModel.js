import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    merchant_code: {
        type: String,
        required: true
    },
    merchant_name: String,
    created_at: Date,
    updated_at: Date

})

export default mongoose.model('user', userSchema)