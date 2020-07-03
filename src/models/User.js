import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: String,
    active: {
        type: Boolean,
        required: true
    },
});

export default model('User', userSchema);