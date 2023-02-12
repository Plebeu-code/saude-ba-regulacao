import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('V_Minha_Regulacao', (table) => {
    table.collate("utf8mb4_0900_ai_ci");
    table.charset("utf8mb4");

    table.integer('CodOcorrencia').primary().notNullable();
    table.string('Paciente', 100).notNullable();
    table.string('DescMotivoSol', 140).notNullable();
    table.datetime('DataAbre').notNullable();
    table.datetime('DataNasc').notNullable();
    table.datetime('DataRealiza').notNullable();
    table.string('Município', 103).notNullable();
    table.string('NmStatusOcorr', 100).notNullable();
  })

}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('V_Minha_Regulacao');
}

