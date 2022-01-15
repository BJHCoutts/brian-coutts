<script lang='ts'>

	import Footer from '../components/footer/Footer.svelte';
	import Header from '../components/header/Header.svelte'
	import Menu from '../components/menu/Menu.svelte';
	import ImageModal from '../components/shared/imageModal/ImageModal.svelte';

</script>

<style>

	:global(:root) {

		--accent: hsl(20, 20%, 70%);
		--bg: hsl(285, 10%, 35%);
		--fg: hsl(20, 20%, 85%);

		--display: 'Italiana', serif;
		--sans: 'Work Sans', sans-serif;

		--header-height: 50px;
		--main-grid: 
			[full-start]
				minmax(1.25em, 1fr)
					[main-start]
						minmax(0, 100em)
					[main-end] 
				minmax(1.25em, 1fr)
			[full-end]
			;
			
		--margin-top: calc(-3em - var(--header-height) - 2em); 
		--padding-top: calc(-3em - var(--header-height) - 2em); 
			
		--padding: 3em 0 4em;
		--padding-bottom: 8em;
		--padding-container: 3em 3em 4em;
		--margin-bottom: 8rem;
		--margin-bottom-small: 3rem;

		--box-shadow: 3px 3px 9px hsla(0, 0%, 5%, 0.5);

		--header-box-shadow: 4px hsla(0, 0%, 5%, 0.95);

		--shadow-down: 0px 4px 4px var(--black);

	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(a) {
		color: var(--accent);
		font-style: italic;
	}

	:global(body) {

	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: var(--display);
	}

	:global(html) {
		background-color: var(--bg);
		color: var(--fg);
		font-family: var(--sans);
		scroll-behavior: smooth;
	}

</style>

<ImageModal />

<Menu />

<Header/>

<main class='main-grid-layout' >
	<slot />
</main>

<Footer />