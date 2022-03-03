<script>

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';

	import ArtText from "./ArtText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";
	import MultiImageExpand from '../../shared/featured/MultiImageExpand.svelte';
	import { allImages } from '../../../stores/files';
	import { shuffle } from '../../../utils/shuffle';

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
			<MultiImageExpand imageFileNames={shuffle($allImages).slice(0,5)} />
		</a>
		<WebDevText />
	</FeaturedRowImageLeft>
	
	<FeaturedRowImageRight>
		<DesignText />
		<a href="/design">
			<MultiImageExpand imageFileNames={shuffle($allImages).slice(1,6)} />
		</a>
	</FeaturedRowImageRight>
		
	<FeaturedRowImageLeft>
		<a href="/art">
			<MultiImageExpand imageFileNames={shuffle($allImages).slice(2,7)} />
		</a>
		<ArtText />
	</FeaturedRowImageLeft>

</FeaturedContainer>