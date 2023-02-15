import {
  useSafeValidatedBody,
} from "h3-zod";

import { z } from "zod";

const bodySchema = z.object({
  occurrence: z.number(),
  joinAt: z.number(),
  address: z.string(),
  isMobile: z.boolean(),
  uptime: z.number(),
}).transform(({ isMobile, joinAt, ...rest }) => ({ 
  ...rest,
  id: crypto.randomUUID(),
  accessedAt: new Date(joinAt),
  device: isMobile ? "mobile" : "desktop",
}))

export default defineEventHandler(async (event) => {
  
  const body = await useSafeValidatedBody(event, bodySchema)

  event.node.res.statusCode = 204

  if (!body.success) {
    console.error(body);

    return send(event)
  }

  const res = await database("audit").insert(body.data)

  console.log(res);
  
  send(event)
})