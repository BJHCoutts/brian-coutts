<script lang='ts'>
	
	import { menuIsOpen } from '../../stores/ui'

	const handleClick = () => {
		menuIsOpen.set(!$menuIsOpen)
	}

</script>

<style>

	nav {

	
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

	.container-inner {
		place-items: center start;
		transition: clip-path 0.3s ease-in;
		background-color: var(--dark-overlay);
		position: fixed;
		inset: 0;
		clip-path: circle(0px at 0% 50%);
		transition: clip-path 0.3s ease-in;
		background-color: var(--dark-overlay);
	}

	.container-outter {
		z-index: 3;
		position: fixed;
		inset: 0;
		clip-path: circle(0px at 0% 50%);
		background-color: var(--light-overlay);
		transition: clip-path 0.2s ease-in;
	}

	.open-inner{
		clip-path: circle(70% at 0% 50%);
	}

	.open-outter{
		clip-path: circle(80% at 0% 50%);
	}

</style>

<section
	class='container-outter' 
	on:click={handleClick} 
	class:open-outter='{$menuIsOpen}'
>

	<nav 
		class='main-grid-layout container-inner' 
		class:open-inner='{$menuIsOpen}'
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
				<a href='contact/'>Contact</a>
			</li>

		</ul>
	</nav>

</section>

	