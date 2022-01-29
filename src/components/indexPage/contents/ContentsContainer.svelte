<script>
import ArtImage from "./ArtImage.svelte";
import ArtText from "./ArtText.svelte";
import ContactImage from "./ContactImage.svelte";
import ContactText from "./ContactText.svelte";

import DesignImage from "./DesignImage.svelte";
import DesignText from "./DesignText.svelte";

import WebDevImage from "./WebDevImage.svelte";
import WebDevText from "./WebDevText.svelte";

</script>

<style>

	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 6em 4em;
	}

</style>

<section class="contents-container margin-bottom">
	<WebDevImage />
	<WebDevText />
	<ArtImage />
	<ArtText />
	<DesignImage />
	<DesignText />
</section>

<!-- <ContactImage />
<ContactText /> -->