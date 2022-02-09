<script lang='ts'>

	import { onMount } from 'svelte'

	export let src: string
	export let alt: string

	let loaded = false
	let thisImage

	onMount( () => {
		thisImage.onLoad = () => {
			loaded = true
		}
	})

</script>

<style>

	img {
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}

	img.loaded {
		opacity: 1;
	}

</style>

<img {src} {alt} class:loaded bind:this={thisImage} loading='lazy' />