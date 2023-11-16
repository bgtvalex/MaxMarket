function headerShow () {
	let header = document.querySelector('.header-fixed')

	if (window.innerWidth > 1022) {

		window.onscroll = function (e) {
			if ( window.scrollY > 200) {
				header.classList.add('active')
			} else {
				header.classList.remove('active')
			}
		}
	}
}

export default headerShow