import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("audit", (table) => {
    table.charset("utf8mb4");
    table.collate("utf8mb4_general_ci");

    table.uuid("id").primary().notNullable()
    table.string("address").notNullable();
    table.integer("occurrence").notNullable();
    table.string("device").notNullable();
    table.bigint("uptime").notNullable();
    table.datetime("accessedAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("audit");
}
