export * from "./client.js"
export * from "./server.js"

import { createSiagaClient } from "./client.js"
import { createSiagaServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createSiaga(options?: ServerOptions) {
  const server = await createSiagaServer({
    ...options,
  })

  const client = createSiagaClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
