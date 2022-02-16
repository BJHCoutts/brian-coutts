<script lang='ts'>

	import FeaturedImage from "./FeaturedImage.svelte";

	export let imageFileNames = ['aleppo.jpg', 'aleppo.jpg', 'aleppo.jpg', 'aleppo.jpg', 'aleppo.jpg',]

	let isMouseOver = false

</script>

<style>

	img {
		background-color: grey;
		width: 25%;
		aspect-ratio: 1 / 1;
		position: absolute;
		transition: .3s ease-in;
		box-shadow: var(--box-shadow);
		object-fit: contain;
		background: none;
	}

	.animatedContainer {
		transform-origin: center;
		height: 50%;
		width: 50%;
		position: absolute;
		inset: 25%;
		transition: .4s ease-in-out;
		cursor: pointer;
		transform: scale(100%, 100%) rotate(-1deg);
		min-height: 150px;
	}
	
	.animatedContainer:hover {
		transform: scale(150%, 150%) rotate(1deg);
	}

	.background {
		background-color: darkslategrey;
		height: 50%;
		width: 50%;
		position: absolute;
		inset: 25%;
		min-height: 150px;
	}

	.container {
		position: relative;
		height: 100%;
		width: 100%;
		min-height: fit-content;
	}

	.image1 {
		top: -20%;
		left: 50%;
	}

	.image2 {
		top: 30%;
		right: -10%;
	}
	
	.image3 {
		bottom: -20%;
		right: 50%;
	}

	.image4 {
		bottom: 30%;
		left:-10%;
	}

	.image1.mouseIsOver {
		transform: translateY(340%) rotate(-3deg);
	}

	.image2.mouseIsOver {
		transform: translateX(-400%) rotate(-3deg);
	}
	.image3.mouseIsOver {
		transform: translateY(-360%) rotate(-3deg);
	}
	.image4.mouseIsOver {
		transform: translateX(400%) rotate(-3deg);
	}

</style>

<div class='container'>

	<div class='background' />
	<div class="animatedContainer" on:mouseenter={() => isMouseOver = true} on:mouseleave={()=>isMouseOver = false} >

		<FeaturedImage imageFileName={imageFileNames[0]} />
		<img src={`/images/${imageFileNames[1]}`} alt='' class='image1' class:mouseIsOver='{isMouseOver}' />
		<img src={`/images/${imageFileNames[2]}`} alt='' class='image2' class:mouseIsOver='{isMouseOver}' />
		<img src={`/images/${imageFileNames[3]}`} alt='' class='image3' class:mouseIsOver='{isMouseOver}' />
		<img src={`/images/${imageFileNames[4]}`} alt='' class='image4' class:mouseIsOver='{isMouseOver}' />

	</div>

</div>