import { database } from "../../utils/contants"

export default defineEventHandler((event) => {
  console.log("Opa")
  return database('V_Minha_Regulacao').select("*")
})