<script lang='ts'>

	import { handleMenuClick, innerMenuSpring, outerMenuSpring } from "../../stores/ui";

</script>
<style>

	ul {
		list-style-type: none;
	}

	li {
		margin-bottom: 2.5em;
	}

	li a {
		font: 400 2.25rem/1.25em var(--display);
		text-decoration: none;
	}

	.container-inner {
		place-items: center start;
		background-color: var(--dark-overlay);
		position: fixed;
		inset: 0;
		background-color: var(--dark-overlay);
	}

	.container-outter {
		z-index: 3;
		position: fixed;
		inset: 0;
		background-color: var(--light-overlay);
	}

</style>

<section
	class='container-outter' 
	on:click={handleMenuClick} 
	style={`clip-path: circle(${$outerMenuSpring}% at 0% 50%);`}
>

	<nav 
		class='main-grid-layout container-inner' 
		style={`clip-path: circle(${$innerMenuSpring}% at 0% 50%);`}
	>
		<ul class='main-grid-center' style='overflow: visible;'>

			<li>
				<a href='/'>Home</a>
			</li>

			<li>
				<a href='webdev/'>Web Development</a>
			</li>

			<li>
				<a href='art/'>Fine Art</a>
			</li>

			<li>
				<a href='design/'>Design</a>
			</li>

			<li>
				<a href='playground/'>Dev Playground</a>
			</li>

			<li>
				<a href='contact/'>Contact</a>
			</li>

		</ul>
	</nav>

</section>

	