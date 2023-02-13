export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  const res = await database("V_Minha_Regulacao")
    .select("*")
    .first()
    .where({ CodOcorrencia: id })
    .catch(() => {
      throw createError({
        statusCode: 500,
        statusMessage: "Erro interno do servidor"
      })
    })

  console.log(res);
  
  if (!res) {
    throw createError({
      statusCode: 404,
      statusMessage: encodeURI("Código de Regulação não encontrado"),
    })
  }

  return res
})