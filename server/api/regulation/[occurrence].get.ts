import {
  useSafeValidatedParams,
} from "h3-zod";

import { z } from "zod";

const regulationQuery = z.object({
  occurrence: z
    .string(
      {
        invalid_type_error: "Código de ocorrencia inválido.",
        required_error: "Código de ocorrencia é obrigatório.",
      }
    )
    .refine( // https://zod.dev/?id=refine
      (v) => !!Number(v), 
      (v) => ({ message: `${v} Defina um código de ocorrencia válida` })
    )
    .transform((v) => parseInt(v)) // https://zod.dev/?id=transform
})

export default defineEventHandler(async (event) => {

  const params = useSafeValidatedParams(event, regulationQuery);

  if (!params.success) {

    const mappedParam = params.error.issues.map(({ message }) => encodeURI(message)).join(", ")

    throw createError({
      statusCode: 400,
      statusMessage: mappedParam,
    })
  }

  const res = await database("V_Minha_Regulacao")
    .select("*")
    .first()
    .where({ CodOcorrencia: params.data.occurrence })
    .catch((err) => {
      console.log(err);
      throw createError({
        statusCode: 500,
        message: "Erro interno do servidor",
      });
    })

  if (!res) {
    throw createError({
      statusCode: 404,
      statusMessage: encodeURI("Código de Regulação não encontrado"),
    });
  }

  return res;

});