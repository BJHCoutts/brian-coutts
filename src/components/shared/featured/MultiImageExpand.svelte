<style>

	img {
		background-color: grey;
		width: 25%;
		aspect-ratio: 1 / 1;
		position: absolute;
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
	}
	
	.animatedContainer:hover {
		transform: scale(125%, 150%) rotate(1deg);
	}

	.background {
		background-color: darkslategrey;
		height: 50%;
		width: 50%;
		position: absolute;
		inset: 25%;
	}

	.container {
		position: relative;
	}

	.image1{
		top: -20%;
		left: 50%;
	}

	.image2{
		top: 30%;
		right: -10%;
	}
	
	.image3{
		bottom: -20%;
		right: 50%;
	}

	.image4{
		bottom: 30%;
		left:-10%;
	}

	.image5{
		bottom: 30%;
		left:-10%;
	}
	.image6{
		bottom: 30%;
		left:-10%;
	}

</style>

<div class='container'>

	<div class='background' />
	<div class="animatedContainer">
		<img src='' alt='' class='image1' />
		<img src='' alt='' class='image2'/>
		<img src='' alt='' class='image3' />
		<img src='' alt='' class='image4' />
		<img src='' alt='' class='image5' />
		<img src='' alt='' class='image6' />

	</div>

</div>