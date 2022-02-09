<script lang='ts'>

	import { onMount } from 'svelte'

	export let once = false

	// export let bottom = 0
	// export let left = 0
	// export let top = 0
	// export let right = 0 
	// export let threshold = 1
	// let options = {
	//  root: document.querySelector('#scrollArea'),
	// 	rootMargin: `${bottom}px ${left}px ${top}px ${right}px`,
	// 	threshold: .2,
	// }

	let intersecting = false
	let container

	onMount( () => {

		if (typeof IntersectionObserver !== 'undefined') {

			let observer = new IntersectionObserver ((entries) => {
				intersecting = entries[0].isIntersecting
				if (intersecting && once) {
					observer.unobserve(container)
				}
			}
			// , options
			)

			observer.observe(container)
			return () => observer.unobserve(container)
		}

	})

</script>

<style>

	div {
		width: 100%;
		height: 100%
	}

</style>

<div bind:this={container} >
	<slot {intersecting} />
</div>