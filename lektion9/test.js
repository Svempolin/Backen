const { default: mongoose } = require("mongoose")

const statusSchema = new Schema ({
    _id: {Type: Number},
    _statusName:{Type: String},
    cases:[{type: Schema.Type.ObjectID, ref: 'Case'}]
})

module.exports = mongoose.model('Status', statusSchema)

const caseSchema = new Schema ({
    status: {type:Number, ref: 'Status', default:1}
})