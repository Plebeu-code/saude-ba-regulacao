import knexConfig from "~/knexfile"
import knex from 'knex';

export enum DatabaseTables {
  'V_Minha_Regulacao'
}

export const database = (tableName: keyof typeof DatabaseTables) => knex(knexConfig[process.env.NODE_ENV!])