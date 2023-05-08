// Exercise 6
function validate() {
	const emailFormat =
		/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const nameFormat = /^[a-zA-Z]+$/;
	const alphanumericFormat = /^[a-zA-Z0-9]+$/;
	const onlyNumbersFormat = /^\d+$/;

	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	/* let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress"); */

	//console.log(errorName)

	// Validate fields entered by the user: name, phone, password, and email
	// JavaScript

	/* first name validation  */
	if (
		fName.value.toLowerCase() === "" ||
		fName.value.length < 3 ||
		!nameFormat.test(fName.value)
	) {
		error++;
		errorName.style.display = "block";
		successName.style.display = "none";
	} else {
		errorName.style.display = "none";
		successName.style.display = "block";
	}
	//console.log(successName);

	/* email address validation  */

	if (
		fEmail.value.toLowerCase() === "" ||
		fEmail.value.length < 6 ||
		!emailFormat.test(fEmail.value)
	) {
		error++;
		errorEmail.style.display = "block"; // muestra mensaje de error
		successEmail.style.display = "none";
	} else {
		errorEmail.style.display = "none"; // no muestra mensaje de error
		successEmail.style.display = "block";
	}
	/* street address validation  */
	if (fAddress.value.toLowerCase() === "" || fAddress.value.length < 3) {
		error++;
		errorAddress.style.display = "block"; // muestra mensaje de error
		successAddress.style.display = "none";
	} else {
		errorAddress.style.display = "none"; // no muestra mensaje de error
		successAddress.style.display = "block";
	}
	/* last name validation  */
	if (
		fLastN.value.toLowerCase() === "" ||
		fLastN.value.length < 3 ||
		!nameFormat.test(fName.value)
	) {
		error++;
		errorLastN.style.display = "block"; // muestra mensaje de error
		successLastN.style.display = "none";
	} else {
		errorLastN.style.display = "none"; // no muestra mensaje de error
		successLastN.style.display = "block";
	}
	/* password validation  */
	if (
		!alphanumericFormat.test(fPassword.value) ||
		fPassword.value.length < 3
	) {
		//console.log(fPassword.value)
		error++;
		errorPassword.style.display = "block";
		successPassword.style.display = "none";
	} else {
		//console.log(fPassword.value)
		errorPassword.style.display = "none";
		successPassword.style.display = "block";
	}
	/* phone number validation */
	if (!onlyNumbersFormat.test(fPhone.value) || fPassword.value.length >= 9) {
		errorPhone.style.display = "block";
		successPhone.style.display = "none";
	} else {
		errorPhone.style.display = "none";
		successPhone.style.display = "block";
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}
}

function stopSubmit(event) {
	event.preventDefault(); // previene envio de formulario

	const btn = document.getElementById("btn");
	btn.disable = true;

	// falta funcion para que envie el formulario pero en este caso no es necesaria
}
