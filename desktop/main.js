/*********
 * 
 * OPEN MODAL ON MOUSE OUT
 * 
 * ***********/

openModal();
function openModal() {
	document.addEventListener('mouseout', onMouseOut);
}

function onMouseOut() {
	let wrapper = document.querySelector('.wrapper');
	wrapper.style.visibility = 'visible';
}

/*****
 * 
 * 
 * FORM VALIDATION
 * 
 * 
 *****/

formValidate();
function formValidate() {
	let form = document.querySelector('#subscriberForm');
	let userName = document.querySelector('#name');
	let email = document.querySelector('#email');
	let checkbox = document.querySelector('#checkbox');

	function getInvalidNode(input, message) {
		let parentEle = input.parentElement;
		parentEle.className = 'form-group invalid';
		let errMessage = parentEle.querySelector('.alert');
		errMessage.innerHTML = message;
	}

	function onSuccess(input) {
		let parentEle = input.parentElement;
		parentEle.className = 'form-group valid';
	}

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		if (email.value === '') {
			getInvalidNode(email, 'email is not valid');
		} else {
			onSuccess(email);
			let emailValue = email.value;
		}

		if (!checkbox.checked) {
			getInvalidNode(checkbox, 'checkbox is not checked');
		} else {
			onSuccess(checkbox);
			let checkboxValue = checkbox.checked;
		}

		if (!email.value == '' && checkbox.checked) {
			let n = (document.cookie = `username=${userName.value};email=${email.value}; checked = ${checkbox.checked}`);
			console.log(n, 'creating cookies');

			let modal = document.querySelector('.wrapper');

			let na = modal.classList.add('hide');
			modal.classList.remove('unhide');

			console.log(na);
		}
	});

	/*****
 * 
 * 
 * CLOSE MODAL
 * 
 * 
 *****/

	closeModal();
	function closeModal() {
		let modal = document.querySelector('.wrapper');
		let closeModal = document.querySelector('.close-icon');
		closeModal.addEventListener('click', function() {
			modal.classList.toggle('hide');
			modal.classList.remove('unhide');

			let na = (document.cookie = `username=${userName.value};email=${email.value}; checked = ${checkbox.checked}`);

			console.log(na);
		});
	}
}
