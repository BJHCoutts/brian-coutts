<script>

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';

	import ArtText from "./ArtText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";
	import MultiImageExpand from '../../shared/featured/MultiImageExpand.svelte';

</script>

<style>

	a {
		display: inline-block;
		height: 100%;
		width: 100%;
		min-height: fit-content;
	}

</style>

<FeaturedContainer>

	<FeaturedRowImageLeft>
		<a href="/webdev">
			<MultiImageExpand />
		</a>
		<WebDevText />
	</FeaturedRowImageLeft>
	
	<FeaturedRowImageRight>
		<DesignText />
		<a href="/design">
			<MultiImageExpand />
		</a>
	</FeaturedRowImageRight>
		
	<FeaturedRowImageLeft>
		<a href="/webdev">
			<MultiImageExpand />
		</a>
		<ArtText />
	</FeaturedRowImageLeft>

</FeaturedContainer>