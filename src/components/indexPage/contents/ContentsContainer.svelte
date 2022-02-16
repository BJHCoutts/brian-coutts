<script>

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';

	import ArtText from "./ArtText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";
	import MultiImageExpand from '../../shared/featured/MultiImageExpand.svelte';

</script>

<FeaturedContainer>

	<FeaturedRowImageLeft>
		<MultiImageExpand />
		<WebDevText />
	</FeaturedRowImageLeft>
	
	<FeaturedRowImageRight>
		<DesignText />
		<MultiImageExpand />
	</FeaturedRowImageRight>

	<FeaturedRowImageLeft>
		<MultiImageExpand />
		<ArtText />
	</FeaturedRowImageLeft>

</FeaturedContainer>