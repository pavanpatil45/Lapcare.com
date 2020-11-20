function validate() {  
	var result = "";	
	result += validateName(); 
	result += validateMobile(); 
	result += validateEmail();
	result += validateSubject(); 
	result += validateMessage(); 
	
	if (result == "") return true;
	
	alert("Validation Result:\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
	
}

function validateMobile(){
	var mobile = document.getElementsByName("mobile")[0].value;
	if (mobile.length != 10)
		return "Mobile no. should be 10 digits.\n";	
	return "";	
}

function validateEmail() {
	var email = valueOf("email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	return "";	
}

function validateSubject(){
	var subject = document.getElementsByName("subject")[0].value;
	if (!subject)
		return "please type your Subject\n";	
	return "";	
}

function validateMessage(){
	var message = document.getElementsByName("message")[0].value;
	if (!message)
		return "please type your Message";	
	return "";	
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
