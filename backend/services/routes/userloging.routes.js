module.exports = app => {

    const login = require("../controller/userlogin.controller");

    app.post('/register', (req, res) => {
        login.register(req, res);
    });
};

