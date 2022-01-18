<script lang='ts'>

	export let isOpen: boolean

</script>

<style>

	svg {
		transition: transform .25s ease-in;
	}

	.closed {
		transform: rotateX(0deg) rotateZ(90deg);
	}
	
	.open {
		transform: rotateX(180deg) rotateZ(90deg);
	}

</style>

<svg class:open='{isOpen}' class='closed' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill='var(--white)' d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>