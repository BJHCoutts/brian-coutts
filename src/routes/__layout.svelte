<script lang='ts'>

	import Footer from '../components/footer/Footer.svelte';
	import Header from '../components/header/Header.svelte'
	import NavMenu from '../components/header/NavMenu.svelte';
	import ImageModal from '../components/shared/imageModal/ImageModal.svelte';

</script>

<ImageModal />

<NavMenu />

<Header/>

<main class='main-grid-layout' >
	<slot />
</main>

<Footer />