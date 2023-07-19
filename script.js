function getFormvalue() {
    //Write your code here

	const FNinput = document.querySelector('input[name="fname"]');
	const LNinput = document.querySelector('input[name="lname"]');

	const fval = FNinput.value.trim();
	const lval = LNinput.value.trim();
	alert(fval+" " +lval);

}
