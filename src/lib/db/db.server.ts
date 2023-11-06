import { sql as sqlVercel } from '@vercel/postgres';
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres';

import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import { POSTGRES_URL } from '$env/static/private';

export const db =
	process.env.NODE_ENV === 'production'
		? drizzleVercel(sqlVercel)
		: drizzle(postgres(POSTGRES_URL, { ssl: { rejectUnauthorized: true } }));

// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';

// export const db = drizzle(sql);
