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

/***************************/

var length = 10;

function fn() {
	console.log(this.length);
	//10
}

var obj = {
	length: 5,

	method: function(fn) {
		fn();

		arguments[0]();
	}
};

obj.method(fn, 1);
