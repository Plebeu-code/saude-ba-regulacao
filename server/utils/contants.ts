import knexConfig from "~/knexfile"
import knex from 'knex';

export enum DatabaseTables {
  'V_Minha_Regulacao'
}

const knexApplication = knex(knexConfig[process.env.NODE_ENV ?? "production"])

// @ts-ignore
export const database = <T = any>(tableName: keyof typeof DatabaseTables) => knexApplication<T>(tableName)