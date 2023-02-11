import type { Knex } from "knex";
import env from "dotenv"

env.config()

const { 
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
  DB_PLATFORM
} = process.env

export default {

  development: {
    client: "mysql",
    connection: {
      user: DB_USERNAME,
      password: DB_PASSWORD,
      host: DB_HOST,
      database: DB_DATABASE,
      port: DB_PORT ?? 3306,
      ssl: DB_PLATFORM === "planetscale"
    }
  },

  production: {
    client: "mysql",
    connection: {
      user: DB_USERNAME,
      password: DB_PASSWORD,
      host: DB_HOST,
      database: DB_DATABASE,
      port: DB_PORT ?? 3306,
    },
  },

} as { [key: string]: Knex.Config }