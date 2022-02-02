export function appearOnScroll (node:Element):void {

	const observerOptions = {
		threshhold: .5,
		rootMargin: "0px 0px 5px 0px"
	}
	
	const observer = new IntersectionObserver( (entries) => {

		entries.forEach( entry => {
			if (!entry.isIntersecting) { 
				entry.target.classList.remove('image-onscreen')
			}else{
				entry.target.classList.add('image-onscreen')
				// observer.unobserve(entry.target)
			}
		})
	
	}, observerOptions)

	observer.observe(node)

}
