import { conn } from '$lib/db/conn.server.js';
import { PageInsights, RememberThis } from '$lib/db/schema.js';
import { eq, desc } from 'drizzle-orm';

import { fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		remembered: fetchLastRemembered(),
		remembrances: fetchRemembered(),
		streamed: { views: fetchViews() }
	};
};

const fetchViews = async () => {
	const insights = await conn.select().from(PageInsights).where(eq(PageInsights.id, 1));
	const views = ++insights[0].views;
	await conn.update(PageInsights).set({ views }).where(eq(PageInsights.id, 1)).returning();

	return views;
};

const fetchLastRemembered = async () => {
	const remembered = await conn.select().from(RememberThis).orderBy(desc(RememberThis.id)).limit(1);
	return remembered[0].remembered;
};

const fetchRemembered = async () => {
	const remembrances = await conn.select().from(RememberThis).orderBy(desc(RememberThis.id));
	// Remove the last one (most recent entry) since it will be displayed in the input field
	remembrances.shift(); // Since we ordered these decending, the first one is the last one so pop() would remove id:1
	return remembrances;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const loginSchema = zfd.formData({
			remembered: zfd.text()
		});

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		const remembered = result.data.remembered;

		await conn.insert(RememberThis).values({ remembered: remembered });
	}
} satisfies Actions;
