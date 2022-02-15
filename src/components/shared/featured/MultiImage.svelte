<style>

	img {
		background-color: grey;
		width: 15%;
		height: 15%;
		position: absolute;
	}

	.animatedContainer {
		position: relative;
		border: 2px solid red;
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
		left:0;
	}

	.image2{
		top: 0;
		right:0;
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
		<img src='image1' alt='' />
		<img src='image2' alt='' />
		<img src='image3' alt='' />
		<img src='image4' alt='' />

	</div>

</div>