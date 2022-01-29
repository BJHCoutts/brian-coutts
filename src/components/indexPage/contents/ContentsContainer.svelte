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
		grid-template-columns: 1fr;
		grid-gap: 6em 4em;
	}

	section > *:nth-child(1) {
		order:1;
	}
	section > *:nth-child(2) {
		order:2;
	}
	section > *:nth-child(3) {
		order: 3;
	}
	section > *:nth-child(4) {
		order: 4;
	}
	section > *:nth-child(5) {
		order: 5;
	}
	section > *:nth-child(6) {
		order: 6;
	}

	@media (min-width: 600px) {

		section {
			grid-template-columns: 1fr 1fr;
		}
		section > *:nth-child(3) {
			order: 4;
		}
		section > *:nth-child(4) {
			order: 3;
		}
	}

</style>

<section class="contents-container margin-bottom">
	<div>
		<WebDevImage />
	</div>
	<div>
		<WebDevText />
	</div>
	<div>
		<ArtImage />
	</div>
	<div>
		<ArtText />
	</div>
	<div>
		<DesignImage />
	</div>
	<div>
		<DesignText />
	</div>
</section>

<ContactImage />
<ContactText />