const mongoose = require('mongoose')

const {Schema} = mongoose;


const adminSchema = new Schema({
    adminId: {type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('Admin', adminSchema)