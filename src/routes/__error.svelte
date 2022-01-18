<script context="module">
	export function load({ error, status }) {
			return {
					props: {
							title: `${status}: ${error.message}`
					}
			};
	}
</script>

<script lang='ts'>
	export let title: string;
</script>

<style>

	h1 {
		font-size: 2.5rem;
	}

</style>

<section class='main-grid-layout padding'>

	<div class="main-grid-center padding neumorph-35-flat">

		<h1>{title}</h1>

	</div>

</section>
