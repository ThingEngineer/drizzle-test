<script lang="ts">
    export let data: { streamed?: { views?: Promise<number> } };

    import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="container">
    <!-- <article class="grid">
        <div>1</div>
        <div>2</div>
        <div>
            <p>
                {#await data.streamed?.views}
                    Loading...
                {:then views}
                    This page has been viewed {views} times.
                {:catch error}
                    {error.message}
                {/await}
            </p>
        </div>
        <div>4</div>
    </article> -->

    <article>
		<div>
			<hgroup>
				<h1>Input Test</h1>
				<h2>Using inputs</h2>
			</hgroup>

			<form method="POST" use:enhance>
				<input
					type="text"
					name="rememberthis"
					placeholder="What do you want to remember?"
					aria-label="Rememberthis"
					autocomplete="off"
					value={form?.data?.rememberthis ?? ''}
				/>
				{#if form?.errors?.rememberthis}
					<p class="error">This is field Required</p>
				{/if}
				<button type="submit" class="contrast">Save</button>
			</form>
		</div>
		<div />
	</article>

	<article>
		<div>
			<hgroup>
				<h1>Page Views</h1>
				<h2>
                {#await data.streamed?.views}
                    Loading...
                {:then views}
                    This page has been viewed {views} times.
                {:catch error}
                    {error.message}
                {/await}
                </h2>
			</hgroup>
		</div>
		<div />
	</article>
</main>

<style>

	.error {
		color: tomato;
	}
</style>
