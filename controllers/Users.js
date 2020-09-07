const usersModel = require('../models/Users');

module.exports.getusers = async (req, res) => {
	let allUsers = await usersModel.getUsers();
	res.json(allUsers);
};