<script lang="ts">
    export let data: { streamed?: { 
        views?: Promise<number>, 
        remembered?: Promise<number>, 
        remembrances?: Promise<number> 
        } 
    };

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
				<h1>Things To Remember</h1>
				<h2>or not</h2>
			</hgroup>

			<form method="POST" use:enhance>
				<input
					type="text"
					name="remembered"
					placeholder="What do you want to remember?"
					aria-label="remembered"
					autocomplete="off"
					value={data.remembered ?? ''}
				/>
				{#if form?.errors?.remembered}
					<p class="error">This is field Required</p>
				{/if}
				<button type="submit" class="contrast">Save</button>
			</form>
            Past remembrances:
            <ul>
                {#each data.remembrances as remembrance, index (remembrance.id)}
                <li>{remembrance.id}) {remembrance.remembered}</li>
                {/each}
            </ul>
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
