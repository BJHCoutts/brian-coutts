<style>

	img {
		background-color: grey;
		width: 25%;
		height: 25%;
		position: absolute;
	}

	.animatedContainer {
		transform-origin: center;
		border: 2px solid red;
		height: 50%;
		width: 50%;
		position: absolute;
		inset: 25%;
		transition: 1s;
		cursor: pointer;
		transform: scale(100%, 100%) rotate(0deg);
	}
	
	.animatedContainer:hover {
		transform: scale(125%, 150%) rotate(15deg);
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
		top: 0;
		right: auto;
		left:0;
		bottom: auto;
	}

	.image2{
		top: 0;
		right:0;
		bottom: auto;
		left: auto;
	}
	
	.image3{
		bottom: 0;
		left:0;
	}

	.image4{
		bottom: 0;
		right:0;
	}

</style>

<div class='container'>

	<div class='background' />
	<div class="animatedContainer">
		<img src='' alt='' class='image1' />
		<img src='' alt='' class='image2'/>
		<img src='' alt='' class='image3' />
		<img src='' alt='' class='image4' />

	</div>

</div>