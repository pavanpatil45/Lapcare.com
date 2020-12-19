function validate() {  
	var result = "";	
	result += validateEmail(); 
	result += validatePassword();

	if (result == "")
		alert("Success !!");
	else
	alert("Validation Result:\n" + result);
	return false;		
}

function validateEmail() {
	var email = document.getElementsByName("email")[0].value;
	if (!email)
		return "please Enter Email.\n";	
	return "";
	
}


function validatePassword() {
	var pass = document.getElementsByName("password")[0].value;
	
	if (!pass) 
		return "Please Enter password\n\n";
	return "";	
}


function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
