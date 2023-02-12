export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")

  const res = await database("V_Minha_Regulacao").select("*").first().where({ CodOcorrencia: id })
  
  if (!res) {
    throw createError({
      statusCode: 404,
      statusMessage: "Código de Regulação não encontrado"
    })
  }

  return res
})