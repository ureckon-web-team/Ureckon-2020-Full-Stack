const mongoose = require('mongoose');
const schema = mongoose.Schema;

let participantSchema = new schema({
    Participant: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    Event: {
        type: schema.Types.ObjectId,
        ref: 'Event',
        required: false
    },
    team_name: {
        type: String,
        required: false
    }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;