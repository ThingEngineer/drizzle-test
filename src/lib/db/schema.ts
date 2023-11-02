import { text, integer, pgTable, serial } from 'drizzle-orm/pg-core';

export const PageInsights = pgTable('page_insights', {
	id: serial('id').notNull(),
	views: integer('views').notNull()
});

export const RememberThis = pgTable('remember_this', {
	id: serial('id').notNull(),
	remembered: text('remembered').notNull()
});
