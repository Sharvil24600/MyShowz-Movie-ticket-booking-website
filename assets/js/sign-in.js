const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');

function signUpValidateForm() {
	var x = document.forms["sign-up-form"]["sign-up-name"].value;
	if (x == "") {
		//   alert("'Name' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Name' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
	x = document.forms["sign-up-form"]["sign-up-email"].value;
	if (x == "") {
		//   alert("'Email' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'E-mail' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
	x = document.forms["sign-up-form"]["sign-up-passwd"].value;
	if (x == "") {
		//   alert("'Password' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Password' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
}

function signInValidateForm() {

	x = document.forms["sign-in-form"]["sign-in-email"].value;
	if (x == "") {
		//   alert("'Email' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'E-mail' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
	x = document.forms["sign-in-form"]["sign-in-passwd"].value;
	if (x == "") {
		//   alert("'Password' can not be empty!!");
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "'Password' can not be empty!!",

			button: {
				title: "Close Button",
				bg: "Cancel Button"
			}
		});
		return false;
	}
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});