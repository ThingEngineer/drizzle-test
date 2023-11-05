<script lang="ts">
	import '../app.postcss';
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;

	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />
<!-- Main -->
<slot />
<!-- Main -->
<Footer />
