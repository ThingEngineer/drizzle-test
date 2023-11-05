// import { sql as sqlVercel } from '@vercel/postgres';
// import { eq, sql as sqlDrizzle } from 'drizzle-orm';
// import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
// import { migrate as migrateNode } from 'drizzle-orm/node-postgres/migrator';
// import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres';
// import { migrate as migrateVercel } from 'drizzle-orm/vercel-postgres/migrator';

// import { Pool } from 'pg';

// export const db =
//   process.env.NODE_ENV === 'production'
//     ? drizzleVercel(sqlVercel)
//     : drizzleNode(new Pool({ connectionString: process.env.POSTGRES_URL }));

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { POSTGRES_URL } from '$env/static/private';

const client = postgres(POSTGRES_URL, {
	ssl: {
		rejectUnauthorized: true
	}
});
// const client = postgres(`${POSTGRES_URL}?sslmode=require`, {
// 	tls: true
// });

export const conn = drizzle(client);

// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';

// export const conn = drizzle(sql);
