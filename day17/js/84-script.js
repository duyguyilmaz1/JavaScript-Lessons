document.querySelector("#formLogin").addEventListener("submit", (e) => {
	e.preventDefault();

	let emailInp = document.querySelector("#email");
	let passwordInp = document.querySelector("#password");

	try {
		let email = emailInp.value;
		let password = passwordInp.value;

		if (!email || !isValidEmail(email)) throw new Error("Geçersiz email adresi");
			
	
		if (!password || !isValidPassword(password)) throw new Error("Geçersiz şifre");
			
	
		e.target.submit();
	} catch (error) {
		alert(error.message);
	}
});

const isValidEmail = (mail) => {

    let regexEmail=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regexEmail.test(mail);
};

const isValidPassword = (sifre) => {
  
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordRegex.test(sifre);
}


