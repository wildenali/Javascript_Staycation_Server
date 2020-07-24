const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;   // Relasiin category dengan item

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itemId: [{      // Relasiin category dengan item
        type: ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Category', categorySchema);
