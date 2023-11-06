<script lang="ts">
  import { page } from "$app/stores"
</script>

<svelte:head>
	<title>Auth Test</title>
</svelte:head>

<main class="container">
  <article>
    <div>
          {#if $page.data.session}
          <hgroup>
          <h1>Protected page</h1>
          <h2>This is a protected content. You can access this content because you are signed in.</h2>
  </hgroup>
  <p>Session expiry: {$page.data.session?.expires}</p>
{:else}
    <hgroup>
    <h1>Access Denied</h1>
    <h2>
      <a href="/auth/signin">
        You must be signed in to view this page
      </a>
    </h2>
    </hgroup>
    {/if}
    </div>
    <div />
  </article>
</main>