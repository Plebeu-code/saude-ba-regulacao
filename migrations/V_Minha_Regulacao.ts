import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('V_Minha_Regulacao', (table) => {
    table.collate("utf8mb4_0900_ai_ci");
    table.charset("utf8mb4");

    table.integer('CodOcorrencia').primary().notNullable();
    table.string('Paciente', 100).nullable();
    table.string('DescMotivoSol', 140).nullable();
    table.datetime('DataAbre').nullable();
    table.datetime('DataNasc').nullable();
    table.datetime('DataRealiza').nullable();
    table.string('Município', 103).nullable();
    table.string('NmStatusOcorr', 100).nullable();
  })

}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('V_Minha_Regulacao');
}

