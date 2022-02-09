<script lang='ts'>

	// import Footer from '../components/footer/Footer.svelte';
	import Header from '../components/header/Header.svelte'
	import Menu from '../components/menu/Menu.svelte';
	import ImageModal from '../components/shared/imageModal/ImageModal.svelte';

</script>

<style>

	:global(:root) {

		--accent: hsl(20, 20%, 70%);
		--bg: hsl(285, 10%, 35%);
		--fg: hsl(20, 20%, 85%);
		--white: hsl(20, 15%, 95%);
		--black: hsl(290, 5%, 15%);
		--dark-overlay: hsla(285, 10%, 25%, .9);
		--light-overlay: hsla(20, 20%, 70%, .80);

		--display: 'Italiana', serif;
		--sans: 'Work Sans', sans-serif;

		--header-height: 50px;
		--main-grid-layout: 
			[full-start]
				minmax(1.25em, 1fr)
					[center-start]
						minmax(0, 55em)
					[center-end] 
				minmax(1.25em, 1fr)
			[full-end]
			;
			
		--header-height: 68.38px;
			
		--margin-bottom: 6rem;
		--margin-bottom-small: 3rem;

		--box-shadow: 2px 2px 9px var(--black);
		--filter-drop-shadow: drop-shadow(3px 3px 4px var(--black));
		--header-box-shadow: 4px hsla(0, 0%, 5%, 0.95);
		--shadow-down: 0px 4px 4px var(--black);
		--shadow-up: 0px -4px 4px var(--black);
		--text-shadow: 2px 2px 6px var(--black);

	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		background-color: var(--bg);
		color: var(--fg);
		font-family: var(--sans);
		scroll-behavior: smooth;
	}
	
	:global(a) {
		color: var(--accent);
		font-style: italic;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: var(--display);
		margin-bottom: .45em;
	}

	:global(hr) {
		display: block;
		place-self: center;
		width: clamp(10%, 10% + 5vw, 80%);
		border-width: .5em;
		border-color: var(--grey);
		border-style: none none dotted;
		margin: 0 auto var(--margin-bottom-small);
		height: 1em;
	}
	
	:global(img) {
		max-width: 100%;
		display: block;
		background-color: darkslategrey;
	}

	:global(.glassmorph) {
		background: hsla(0, 0%, 100%, 0.20);
		box-shadow: 0 8px 32px 0 hsla(236, 0%, 40%, 0.6);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		border: 1px solid hsla(0, 0%, 100%, 0.18);
		padding: 1em;
	}

	:global(.glassmorph-dark) {
		background: hsla(0, 0%, 0%, 0.5);
		box-shadow: 0 8px 32px 0 hsla(236, 0%, 40%, 0.6);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		border: 1px solid hsla(0, 0%, 100%, 0.18);
		padding: 1em;
	}
	
	:global(.main-grid-layout) {
		display: grid;
		grid-template-columns: var(--main-grid-layout);
	}
	
	:global(.main-grid-layout > *) {
		grid-column: center;
	}
	
	:global(.main-grid-layout-center) {
		grid-column: center;
	}
	
	:global(.main-grid-layout-full) {
		grid-column: full;
	}

	:global(.margin-bottom) {
		margin-bottom: var(--margin-bottom)
	}

	:global(.margin-bottom-small) {
		margin-bottom: var(--margin-bottom-small)
	}

	:global(.shadow-down) {
		box-shadow: var(--shadow-down);
	}

</style>

<ImageModal />

<Menu />

<Header/>

<main class='main-grid-layout' >
	<slot />
</main>

<!-- <Footer /> -->