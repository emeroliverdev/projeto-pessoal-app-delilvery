const { loginService, createUser } = require('../services/userService'); 

const login = async (req, res, _next) => {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    if (!result) {
        return res.status(404).json(null);
    }
    return res.status(200).json(result);    
};

const create = async (req, res, _next) => {
    const { name, email, password, role } = req.body;

    const user = await createUser(name, email, password, role);
    if (!user) {
        return res.status(409).json({ error: 'user already exists' });
    }
    return res.status(201).json(user);
};

module.exports = {
    login,
    create,
};