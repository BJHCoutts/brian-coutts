<script>

	import { appearOnScroll } from '../../../utils/appearOnScroll'

	import FeaturedContainer from '../../shared/featured/FeaturedContainer.svelte';
	import FeaturedRowImageLeft from '../../shared/featured/FeaturedRowImageLeft.svelte';
	import FeaturedRowImageRight from '../../shared/featured/FeaturedRowImageRight.svelte';
	import FeaturedImage from '../../shared/featured/FeaturedImage.svelte';

	import ArtText from "./ArtText.svelte";
	import ContactImage from "./ContactImage.svelte";
	import ContactText from "./ContactText.svelte";
	import DesignText from "./DesignText.svelte";
	import WebDevText from "./WebDevText.svelte";

</script>

<FeaturedContainer>

	<FeaturedRowImageLeft>
		<FeaturedImage imageFileName={`aleppo.jpg`} />
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

<div class='contents-image-container' use:appearOnScroll>
	<ContactImage />
</div>
<ContactText />