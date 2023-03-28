const mongoose = require('mongoose')

const {Schema} = mongoose;

const employeesSchema = new Schema({
    firstName: {type: String, required: true},
    lastName:  {type: String, required: true},
    // email:     {type: String, default: function() {
    //     return this.firstName + this.lastName + '@compareSync.se'
    // }},
    email: {type: String, lowercase: true},
    passwordHash: { type: String, required: true}
})

// employeesSchema.pre('save',  function(next) {
//     console.log(this.email)
//    this.exists({email:this.email })
//   .then(result => {
//     if(result){
//         this.email = this.firstName +this.lastName + "1" + '@compareSync.se'
//     }
//     next()
//   })
//   .catch(err => console.log(err))
// })


module.exports = mongoose.model('Employee', employeesSchema)