const mongoose = require('mongoose');
const schema = mongoose.Schema;

let roleSchema = new schema({
    role: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;