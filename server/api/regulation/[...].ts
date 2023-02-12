export default defineEventHandler((event) => {
  console.log("Opa")
  send(event)
  // return database('V_Minha_Regulacao').select("*")
})