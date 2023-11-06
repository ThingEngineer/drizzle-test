<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Button Test</title>
</svelte:head>

<main class="container">
	<article>
	  <div>
		<hgroup>
		  <h1>Auth Button Test</h1>
		  <h2>Quick sign-in / sign-out button.</h2>
		</hgroup>
		<p>
			{#if Object.keys($page.data.session || {}).length}
			{#if $page.data.session.user.image}
				<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
			{/if}
			<span class="signedInText">
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user.email || $page.data.session.user.name}</strong>
			</span>
			<button on:click={() => signOut()} class="button">Sign out</button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<button on:click={() => signIn('github')}>Sign In with GitHub</button>
			{/if}
		</p>
	  </div>
	  <div />
	</article>
  </main>