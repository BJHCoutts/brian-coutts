<script lang='ts'>
	import { imageModalUrl, imageModalIsOpen } from "../../../stores/ui";
	import { fly } from 'svelte/transition'

	const handleClick = () => {
		imageModalIsOpen.set(false)
		imageModalUrl.set('')
	}


</script>

<style>

	.modal-image {
		position: fixed;
		inset: 0;
		background-color: hsla(0, 0%, 50%, .9);
		z-index: 4;
		cursor: pointer;
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: 50% / 50%;
		cursor: pointer;
	}

</style>

{#if $imageModalIsOpen}
	
	<img class='modal-image' alt='fullscreen view of selected item' src={$imageModalUrl} transition:fly='{{ y: 150, duration: 300 }}' on:click|stopPropagation={handleClick}/>

{/if}