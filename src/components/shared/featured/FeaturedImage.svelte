<script lang='ts'>

	import { appearOnScroll } from "../../../utils/appearOnScroll";

	export let imageFileName: string

</script>
<style>

	img {
		background-color: darkslategrey;
		height: 100%;
		width: 100%;
		transition: all .5s ease-in;
		opacity: 0;
		transform: rotateX(90deg);
		object-fit: contain;
		object-position: center;
	}

	.container {
		overflow: hidden;
		max-height: 100%;
	}

	.image-onscreen {
		opacity: 1;
		transform: rotateX(0deg);
	}

</style>

<div class="container">
	<img src={`${imageFileName}`} alt={`${imageFileName}`} use:appearOnScroll>
	<div style='display:hidden;' class="image-onscreen"/>
</div>
