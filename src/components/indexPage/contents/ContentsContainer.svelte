<script>

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';

	import ArtText from "./ArtText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";
	import MultiImageExpand from '../../shared/featured/MultiImageExpand.svelte';
	import { shuffle } from '../../../utils/shuffle';
	import { allImages } from '../../../stores/files';

	const webDevImages = shuffle(allImages)
	const designImages = shuffle(allImages)
	const artImages = shuffle(allImages)

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
			<MultiImageExpand imageFileNames={webDevImages} />
		</a>
		<WebDevText />
	</FeaturedRowImageLeft>
	
	<FeaturedRowImageRight>
		<DesignText />
		<a href="/design">
			<MultiImageExpand imageFileNames={designImages} />
		</a>
	</FeaturedRowImageRight>
		
	<FeaturedRowImageLeft>
		<a href="/art">
			<MultiImageExpand imageFileNames={artImages} />
		</a>
		<ArtText />
	</FeaturedRowImageLeft>

</FeaturedContainer>