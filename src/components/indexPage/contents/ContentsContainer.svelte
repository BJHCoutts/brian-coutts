<script>

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';
	import FeaturedImage from '../../shared/featured/FeaturedImage.svelte';

	import ArtText from "./ArtText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";
import MultiImage from '../../shared/featured/MultiImage.svelte';

</script>

<FeaturedContainer>

	<FeaturedRowImageLeft>
		<MultiImage />
		<WebDevText />
	</FeaturedRowImageLeft>
	
	<FeaturedRowImageRight>
		<DesignText />
		<FeaturedImage imageFileName={`aleppo.jpg`} />
	</FeaturedRowImageRight>

	<FeaturedRowImageLeft>
		<FeaturedImage imageFileName={`aleppo.jpg`} />
		<ArtText />
	</FeaturedRowImageLeft>

</FeaturedContainer>