<script lang='ts'>
	import { menuIsOpen } from '../../stores/ui';
	import MenuIcon from '../shared/icons/MenuIcon.svelte';

	const handleClick = () => {

		const menu = document.getElementById('nav-icon')
		menu.classList.toggle('open')

		menuIsOpen.set(!$menuIsOpen)

	}

	const style1Open = `
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: translate(-50%, -50%) rotate(45deg);
	`
	

	const style2Open = `
		width: 0%;
		opacity: 0;
	`
	
	const style3Open = `
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: translate(-50%, -50%) rotate(-45deg);
	`



</script>

<style>

	.icon-container {
		background-color: var(--black);
		border-radius: 450%;
		/* display: grid;
		place-items: center; */
		cursor: pointer;
		height: var(--header-height);
		aspect-ratio: 1/1;
		z-index: 3;
		position: relative;
	}

		#nav-icon {
		width: 100%;
		height: 100%;
		position: absolute;
		margin: 0 auto;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: .5s ease-in-out;
		-moz-transition: .5s ease-in-out;
		-o-transition: .5s ease-in-out;
		transition: .5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon.open {

	}

	#nav-icon span {
		display: block;
		position: absolute;
		height: 8%;
		width: 80%;
		background: white;
		/* border-radius: 9px; */
		opacity: 1;
		left: 50%;
		/* -webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg); */
		transform: translate(-50%, -50%) rotate(0deg);
		-webkit-transition: .25s ease-in-out;
		-moz-transition: .25s ease-in-out;
		-o-transition: .25s ease-in-out;
		transition: .25s ease-in-out;
	}

	#nav-icon span:nth-child(1) {
		top: 25%;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#nav-icon span:nth-child(2) {
		top: 50%;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#nav-icon span:nth-child(3) {
		top: 75%;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#nav-icon.open span:nth-child(1) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		top: -3px;
		left: 8px;
	}

	#nav-icon.open span:nth-child(2) {
		width: 0%;
		opacity: 0;
	}

	#nav-icon.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		top: 39px;
		left: 8px;
	}

</style>

<div class='icon-container' on:click={handleClick}>
	<div id="nav-icon">
		<span style={$menuIsOpen ? style1Open : ''}></span>
		<span style={$menuIsOpen ? style2Open : ''}></span>
		<span style={$menuIsOpen ? style3Open : ''}></span>
	</div>
</div>