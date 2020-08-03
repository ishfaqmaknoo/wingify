mobileModel();
function mobileModel() {
	//set gloabl variables
	let wrapper = document.querySelector('.wrapper');
	let closeBtn = document.querySelector('.close-icon');

	setTimeout(function() {
		console.log('i am coming in 5 seconds');

		wrapper.style.visibility = 'visible';
	}, 5000);

	function closeModal() {
		closeBtn.addEventListener('click', function() {
			wrapper.style.visibility = 'hidden';
		});
	}
	closeModal();
}
