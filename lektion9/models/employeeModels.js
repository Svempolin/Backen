const Employee = require('../schemas/empoyeeSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth')

exports.addEmployee = async (req, res)=> {
    const {firstName, lastName, password} = req.body;

    if (!firstName || !lastName|| !password){
    return res.status(400).json({
    message: ' you need to enter all teh suff'
})
    }


    const count = await Employee.count({firstName: firstName, lastName: lastName})
    console.log(count)
    let suffix = ''
    if(count > 0){
        suffix = count
    }
    const email = firstName + "."+ lastName + suffix + "@comapny.se"
    // eventuellt trye/catch för att fånga upp fel
    const salt =  await bcrypt.genSalt(15)
    const hash = await bcrypt.hash(password,salt)

 const _employee = new Employee({firstName, lastName, passwordHash: hash, email})
 const employee = await _employee.save()


 res.status(201).json(auth.generateToken(employee))
}


exports.login = async( req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json({
        message: ' you need to enter all teh suff'
    })
        }
    const employee =  await Employee.findOne({email})
    if(!employee){
        return res.status(401).json({
            message: "the user not found"
        })
    }

    const result = await bcrypt.compare(password, employee.passwordHash)
    if(!result){
        return res.status(401).json({
            message: "the user not found"
        })
    }

    res.status(200).json(auth.generateToken(employee))
}


exports.fireEmployee = async( req, res) => {

 const employee =  Employee.findOneAndDelete({_id: req.params.id})
    if(!employee){
        res.status(404).json({
            message:"could not find the emp"
        })
    }
    res.status(204).json()
}

exports.updateEmployee = async(req, res)=> {
    // const employee = await Employee.findByIdAndUpdate({_id: req.params.id}, {}, {new:true})
    const employee = await Employee.findOne({_id: req.params.id})
    employee.firstName = req.body.firstName
    employee.lastName = req.body.lastName

    const count = await Employee.count({firstName: employee.firstName, lastName: employee.lastName})
    console.log(count)
    let suffix = ''
    if(count > 0){
        suffix = count
    }
    employee.email = employee.firstName + "." + employee.lastName + suffix + "@comapny.se"
    const updatedEmployee = await employee.save()
    res.status(200).json(updatedEmployee)
}
