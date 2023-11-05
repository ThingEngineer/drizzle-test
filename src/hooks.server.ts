import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

const _secret = process.env.secret;

export const handle = SvelteKitAuth({
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
			// redirectProxyUrl: 'http://localhost:3000/auth'
		})
	],
	trustHost: true,
	secret: _secret
});
