<style>

	.container {
		display:grid;
		grid-template-columns: 1fr;
		position: relative;
		grid-gap: 2em;
	}

	.inner-border {
		inset: 1em;
		position: absolute;
		border: 4px solid var(--accent);
		opacity: 15%;
	}

	@media screen and (min-width: 600px) {

		.container {
			grid-template-columns: 1fr 1fr;
		}

		.inner-border {
			grid-column: 1 / -1;
			z-index: -1;

		}
	}

</style>

<div class="container">
	<div class="inner-border"/>
	<slot/>
</div>