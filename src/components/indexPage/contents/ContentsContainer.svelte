<script>
import { onMount } from "svelte";

import ArtImage from "./ArtImage.svelte";
import ArtText from "./ArtText.svelte";
import ContactImage from "./ContactImage.svelte";
import ContactText from "./ContactText.svelte";

import DesignImage from "./DesignImage.svelte";
import DesignText from "./DesignText.svelte";

import WebDevImage from "./WebDevImage.svelte";
import WebDevText from "./WebDevText.svelte";

onMount(() => {

	const contentsImageContainers = document.querySelectorAll('.contents-image-container')

	const observer = new IntersectionObserver( (entries) => {

		entries.forEach( entry => {
			if (!entry.isIntersecting) { 
				entry.target.classList.toggle('image-onscreen')
				return
			}else{
				console.log('intersecting', entry.target.classList)
			}
		})

	})

	contentsImageContainers.forEach(image => {
		observer.observe(image)
	});

})

</script>

<style>

	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 6em 4em;
	}

	section > *:nth-child(1) {
		order:1;
	}
	section > *:nth-child(2) {
		order:2;
	}
	section > *:nth-child(3) {
		order: 3;
	}
	section > *:nth-child(4) {
		order: 4;
	}
	section > *:nth-child(5) {
		order: 5;
	}
	section > *:nth-child(6) {
		order: 6;
	}

	.contents-image-container {
		transition: all .5s ease-in;
		transform: rotateX(90deg);
		opacity: .25;
	}
	
	.image-onscreen {
		opacity: 1;
		transform: rotateX(0deg);
	}

	@media (min-width: 600px) {

		section {
			grid-template-columns: 1fr 1fr;
		}
		section > *:nth-child(3) {
			order: 4;
		}
		section > *:nth-child(4) {
			order: 3;
		}
	}

</style>

<section class="contents-container margin-bottom">
	<div class='contents-image-container'>
		<WebDevImage />
	</div>
	<div>
		<WebDevText />
	</div>
	<div class='contents-image-container'>
		<ArtImage />
	</div>
	<div>
		<ArtText />
	</div>
	<div class='contents-image-container'>
		<DesignImage />
	</div>
	<div>
		<DesignText />
	</div>
</section>

<ContactImage />
<ContactText />