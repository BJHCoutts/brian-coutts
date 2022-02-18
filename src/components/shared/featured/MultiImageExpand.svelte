<script lang='ts' >

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
		object-fit: contain;
		background: none;
		padding: 0;
	}

	.animatedContainer {
		transform-origin: center;
		height: 50%;
		width: 50%;
		position: absolute;
		inset: 25%;
		transition: .4s ease-in-out;
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
		z-index: 1;
	}

	.image1 {
		top: -20%;
		left: 50%;
		filter: var(--filter-drop-shadow);
	}

	.image2 {
		top: 30%;
		right: -10%;
		box-shadow: var(--box-shadow);
	}
	
	.image3 {
		bottom: -20%;
		right: 50%;
		filter: var(--filter-drop-shadow);
	}
	
	.image4 {
		bottom: 30%;
		left:-10%;
		box-shadow: var(--box-shadow);
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
		<img src={`${imageFileNames[1]}`} alt={`${imageFileNames[1]}`} class='image1' class:mouseIsOver='{isMouseOver}' />
		<img src={`${imageFileNames[2]}`} alt={`${imageFileNames[2]}`} class='image2 glassmorph' class:mouseIsOver='{isMouseOver}' />
		<img src={`${imageFileNames[3]}`} alt={`${imageFileNames[3]}`} class='image3' class:mouseIsOver='{isMouseOver}' />
		<img src={`${imageFileNames[4]}`} alt={`${imageFileNames[4]}`} class='image4 glassmorph' class:mouseIsOver='{isMouseOver}' />

	</div>

</div>