"use strict";

//minimum
//1.

let admin;
let name = 'John';
admin = name;
console.log(admin);

//2.
let login;
let password;

login = "Admin";
password = "TheMaster";

console.log('Who\'s there?');
if (login == "Admin"){
	console.log('Password?');
	if (password == "TheMaster"){
		console.log('Wellcome!');
	
	}
	else if (password == "Cancel"){
		console.log("Canceled");
	}
	else {
		console.log("Wrong password");
	}
}
else if (login == "Cancel"){
	console.log("Canceled");
}
else {
	console.log("I don\'t know you");
}

console.log("\n");

//maximum
//3.
login = "Admin";
password = "TheMaster";
switch(login){
	case "Admin":{
		console.log('Password?');
		switch(password){
			case "TheMaster":{
				console.log('Wellcome!');
				break;
			}
			case "Cancel":{
				console.log("Canceled");
				break;				
			}
			default: {
				console.log("Wrong password");
			}
		}
		break;
	}
	case "Cancel":{
		console.log("Canceled");
		break;
	}
	default: {
		console.log("I don\'t know you");
	}
}