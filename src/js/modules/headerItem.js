function headerItem () {

	const items = document.querySelectorAll('.header__row .nav__item a')
	const itemsFix = document.querySelectorAll('.header-fixed__row .nav__item a')
	const mobItems = document.querySelectorAll('.mob__item a')
	const color1 = '#000'
	const color2 = '#777'

	document.querySelector('.mobile-nav').onclick = () => {
		document.querySelector('.mobile-nav').classList.remove('mobile-nav--open')
		document.querySelector('.nav-icon').classList.remove('nav-icon--active')
	}

	const numberObserver = new IntersectionObserver( (entries, observer) => {
		entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.getAttribute('data-sector') 
					let num = parseInt(entry.target.getAttribute('data-sector'))

					setColorBlack(items)
					setColorBlack(itemsFix)
					setColorBlack(mobItems)
					setColorGray(items)
					setColorGray(itemsFix)
					setColorGray(mobItems)

					function setColorBlack (arr) {
						for (let item of arr) {
							item.style.color = color1
						}
					}

					function setColorGray (arr) {
						arr.forEach((item, index) => {
							if (index === num) {
								item.style.color = color2
							}
						})
						
					}
				}
		})
	})

	document.querySelectorAll('.sector').forEach( (sector) => numberObserver.observe(sector))
}

export default headerItem