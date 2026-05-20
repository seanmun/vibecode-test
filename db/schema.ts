import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core'

export const votes = pgTable('votes', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull().unique(),
  choice: varchar('choice', { length: 32 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  userName: varchar('user_name', { length: 255 }).notNull(),
  body: varchar('body', { length: 200 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
