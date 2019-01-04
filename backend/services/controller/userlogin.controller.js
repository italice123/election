const register = require("../model/userLogin").register();


exports.register = (req, res) =>{
    res.status(200).json(register);
}
