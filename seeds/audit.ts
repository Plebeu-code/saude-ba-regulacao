import type { Knex } from "knex";

const random = (min: number = 0, max: number = 225) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomIPAddress = () =>
  random() + "." + random() + "." + random() + "." + random();

export async function seed(knex: Knex): Promise<void> {
  await knex("audit").del();

  const results: { CodOcorrencia: number }[] = await knex(
    "V_Minha_Regulacao"
  ).select("CodOcorrencia");

  const audits = Array.from({ length: 50 }, () => ({
    id: crypto.randomUUID(),
    address: randomIPAddress(),
    occurrence:
      results[Math.floor(Math.random() * results.length)].CodOcorrencia,
    device: ["desktop", "mobile"][Math.floor(Math.random() * 2)],
    uptime: Math.floor(Math.random() * (43200 - 0 + 1) + 0) * 1000,
    accessedAt: new Date(),
  }));

  return knex("audit").insert(audits);
}
