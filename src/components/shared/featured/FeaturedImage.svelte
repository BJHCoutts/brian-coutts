<script>

	import { appearOnScroll } from "../../../utils/appearOnScroll";

	export let imageFileName

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

	.image-onscreen {
		opacity: 1;
		transform: rotateX(0deg);
	}

</style>

<div>
	<img src={`/images/${imageFileName}`} alt="placeholder" use:appearOnScroll>
	<div style='display:hidden;' class="image-onscreen"/>
</div>
