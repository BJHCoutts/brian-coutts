<script>
import FeaturedImageCell from "./FeaturedImageCell.svelte";
import FeaturedTextCell from "./FeaturedTextCell.svelte";




	// import ArtImage from "./ArtImage.svelte";
	// import ArtText from "./ArtText.svelte";

	// import ContactImage from "./ContactImage.svelte";
	// import ContactText from "./ContactText.svelte";

	// import DesignImage from "./DesignImage.svelte";
	// import DesignText from "./DesignText.svelte";

	import WebDevImage from "../../indexPage/contents/WebDevImage.svelte";
	import WebDevText from "../../indexPage/contents/WebDevText.svelte";
	import FeaturedRowImageLeft from "./FeaturedRowImageLeft.svelte";
	// import WebDevText from "./WebDevText.svelte";

</script>

<style>

	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 6em 4em;
	}

</style>

<section class="contents-container margin-bottom">
	<FeaturedRowImageLeft>
		<WebDevImage />
		<WebDevText />
	</FeaturedRowImageLeft>
	<!-- <FeaturedImageCell>
		<WebDevImage />
	</FeaturedImageCell> -->
	<!-- <FeaturedTextCell>
		<WebDevText/>
	</FeaturedTextCell>
	<FeaturedImageCell>
		<DesignImage/>
	</FeatureImageCell>
	<FeaturedTextCell>
		<DesignText/>
	</FeaturedTextCell>
	<FeaturedImageCell>
		<DesignImage />
	</FeatureImageCell>
	<FeaturedTextCell>
		<DesignText/>
	</FeaturedTextCell> -->
</section>

<!-- <div class='contents-image-container' use:appearOnScroll>
	<ContactImage />
</div>
<ContactText /> -->

<div style='display:hidden;' class="image-onscreen"/>