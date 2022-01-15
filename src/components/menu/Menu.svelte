<script lang='ts'>
	
	import { menuIsOpen } from '../../stores/ui'

	const handleClick = () => {
		menuIsOpen.set(!$menuIsOpen)
	}

</script>

<style>
	nav {
		place-items: end start;
		z-index: 3;
		transition: clip-path 0.3s ease-in;
	}
	
	ul {
		list-style-type: none;
	}

	li {
		margin-bottom: 2.5em;
	}

	li a {
		font: 400 2.25rem/1.25em var(--display);
	}

	.container {
		position: fixed;
		inset: 0;
		clip-path: circle(0px at 0% 100%);
	}

	.loginLink {
		text-align: right;
	}

	.open{
		clip-path: circle(95% at 0% 100%);
	}

</style>

	<nav 
		class='main-grid-layout container' 
		on:click={handleClick} 
		class:open='{$menuIsOpen}'
	>
		<ul class='main-grid-center' style='overflow: visible;'>

			<li>
				<a href='/' class='loginLink'>Home</a>
			</li>



		</ul>
	</nav>

	