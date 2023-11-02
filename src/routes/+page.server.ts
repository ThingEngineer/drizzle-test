import { conn } from '$lib/db/conn.server.js';
import { PageInsights } from '$lib/db/schema.js';
import { eq } from 'drizzle-orm';

import { fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

import type { Actions } from './$types';

export const load = async () => {
	return { streamed: { views: fetchViews() } };
};

const fetchViews = async () => {
	const insights = await conn.select().from(PageInsights).where(eq(PageInsights.id, 1));

	const views = ++insights[0].views;

	await conn.update(PageInsights).set({ views }).where(eq(PageInsights.id, 1)).returning();

	return views;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const loginSchema = zfd.formData({
			rememberthis: zfd.text()
		});

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		// throw redirect(303, '/test');
		console.log(result.data);
	}
} satisfies Actions;
