<script lang='ts'>
import { onMount } from "svelte";


	import IntersectionObserver from "../intersectionalObserver/IntersectionObserver.svelte";
	import Image from "./Image.svelte";

	export let src
	export let alt

	let nativeLazyLoading = false

	onMount( () => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLazyLoading = true
		}
	})

</script>

<IntersectionObserver once={false} let:intersecting={intersecting} >

	{#if intersecting || nativeLazyLoading}
		<Image {alt} {src} />
	{/if}

</IntersectionObserver>