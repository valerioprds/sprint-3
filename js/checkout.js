// Exercise 6
function validate() {
	const emailFormat =
		/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const nameFormat = /^[a-zA-Z]+$/;

	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById('errorAddress')

	// Validate fields entered by the user: name, phone, password, and email
	// JavaScript
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

	if (
		fEmail.value.toLowerCase() === "" ||
		fEmail.value.length < 6 ||
		!emailFormat.test(fEmail.value)
	) {
		error++;
		errorEmail.style.display = "block"; // muestra mensaje de error
		successEmail.style.display = "none"
	} else {
		errorEmail.style.display = "none"; // no muestra mensaje de error
		successEmail.style.display = "block"
	}


	if (
		fAddress.value.toLowerCase() === "" ||
		fEmail.value.length < 3 
		
	) {
		error++;
		errorAddress.style.display = "block"; // muestra mensaje de error
		successAddress.style.display = "none"
	} else {
		errorAddress.style.display = "none"; // no muestra mensaje de error
		successAddress.style.display = "block"
	}

	/* 	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}  */
}


function stopSubmit(event) {

	event.preventDefault() // previene envio de formulario

	const btn = document.getElementById('btn')
	btn.disable = true

	// falta funcion para que envie el formulario pero en este caso no es necesaria 
}