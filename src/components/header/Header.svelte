<script lang='ts'>

	import ClearIcon from "../shared/icons/ClearIcon.svelte";
	import MenuIcon from "../shared/icons/MenuIcon.svelte";
	import { menuIsOpen } from '../../stores/ui'

</script>

<style>
 
	header {
		position: sticky;
		top:0;
		left:0;
		right:0;
		z-index: 3;
		overflow: visible;
		padding: 1em 0;
	}

	.back {
		transform: rotateY(180deg);
	}

	.center-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.email {
		color:var(--fg);
	}

	.email-container {
		border-radius: 5px;
		border: 2px solid var(--accent);
		width: fit-content;
		display: grid;
		place-items: center;
		padding: .2em .4em;
		background-color: var(--bg);
		cursor: pointer;
		color: var(--fg);
		box-shadow: var(--box-shadow);
	}

	.front {
		transform: rotateY(0deg);
	}

	.icon-container {
		border-radius: 50%;
		border: 2px solid var(--accent);
		width: fit-content;
		aspect-ratio: 1 / 1;
		display: grid;
		place-items: center;
		padding: .2em;
		background-color: var(--bg);
		cursor: pointer;
		position: absolute;
    transform-origin: 50% 50% 0px;
		transition: transform .4s ease-in;
		backface-visibility: hidden;
		box-shadow: var(--box-shadow);
	}

	.place-holder {
		height: 34.39px;
		width: 34.39px;
		display: inline-block;
	}

</style>

<header class='main-grid-layout glassmorph shadow-down'>

	<div class='main-grid-layout-center center-container'>

		<div class={`icon-container ${$menuIsOpen? 'back' : 'front'}`} on:click={() => menuIsOpen.set(true)}>
			<MenuIcon />
		</div>
		
		<div class={`icon-container ${$menuIsOpen? 'front' : 'back'}`} on:click={() => menuIsOpen.set(false)}>
			<ClearIcon />
		</div>

		<div class="place-holder"></div>

		<a href="mailto: bjhcoutts@gmail.com" target='_blank' class='email-container'>Contact Me: bjhcoutts@gmail.com</a>
	</div>
	
</header>