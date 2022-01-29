<style>

	h1 {
		font-size: clamp(4rem, 10vw, 6rem);
	}

	h2 {
		font-size: 2.5rem;
	}

	hr {
		margin-left: 0;
	}

	section {
		grid-column: full;
		background-image: 
			linear-gradient(to bottom, hsla(231, 54%, 97%, 0.40), hsla(29, 50%, 29%, 0.60)),
			url('../../../assets/images/aleppo.jpg')
		;
		margin-top: calc(var(--header-height) * -1);
		padding: calc(var(--header-height) * 2) 0;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		background-repeat: none;
		position: relative;
	}

	section > * {
		color: var(--white);
		text-shadow: var(--text-shadow);
	}

	.details {
		color: var(--accent);
		position: absolute;
		bottom: 0;
		right:0;
		opacity: 50%;
	}

	.disc-line-break {
		display: block;
	}

	@media (min-width: 450px) {

		.disc-line-break {
			display: none;
		}

	}

</style>

<section class='main-grid-layout margin-bottom-small'>

	<h1>Brian Coutts</h1>
	<hr />
	<h2>Site is Work In Progess</h2>
	<h2>Web Dev ◇ Design ◇ Fine Art</h2>
	<small class='details'>
		Digital painting by Brian Coutts.
		<br class='disc-line-break'/> 
		Original photo by Joseph Eid.
	</small>

</section>