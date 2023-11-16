function video () {
	const numberObserver = new IntersectionObserver( (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.src = entry.target.getAttribute('data-src')
				observer.unobserve(entry.target)
			}
		})
	},
	{
		rootMargin: '200px 0px 0px'
	})

	document.querySelectorAll('iframe').forEach( (frame) => numberObserver.observe(frame))
}

export default video