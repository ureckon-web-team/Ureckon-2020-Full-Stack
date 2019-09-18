const mongoose = require('mongoose');
const schema = mongoose.Schema;

let eventSchema = new schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Contact: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    rulebook: {
        type: String,
        required: true
    },
    is_mvp: {
        type: Boolean,
        default: true
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;