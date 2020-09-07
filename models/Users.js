const request = require("request");

module.exports.getUsers = async () => {
	try{
		let allUsers = await getAllUsers();
		return allUsers;
	}catch(err){
		console.log(err);
	}
};

let getAllUsers = () => {
	return new Promise((resolve, reject) => {
		const url = "https://reqres.in/api/users";
		request.get(url, (error, response, body) => {
		  	let json = JSON.parse(body);
		  	resolve(json)
		});
	});
};