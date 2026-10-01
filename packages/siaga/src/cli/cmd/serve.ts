import { Server } from "../../server/server"
import { cmd } from "./cmd"
import { withNetworkOptions, resolveNetworkOptions } from "../network"
import { Flag } from "../../flag/flag"

export const ServeCommand = cmd({
  command: "serve",
  builder: (yargs) => withNetworkOptions(yargs),
  describe: "starts a headless siaga server",
  handler: async (args) => {
    if (!Flag.SIAGA_SERVER_PASSWORD) {
      console.error(
        "Error: SIAGA_SERVER_PASSWORD is required.\nSet it with: export SIAGA_SERVER_PASSWORD=yourpassword",
      )
      process.exit(1)
    }
    const opts = await resolveNetworkOptions(args)
    const server = Server.listen({ ...opts, webUI: false })
    console.log(`siaga server listening on http://${server.hostname}:${server.port}`)
    console.log(`API-only mode — connect from app.siagasiber.id or use 'siaga web' for built-in UI`)
    await new Promise(() => {})
    await server.stop()
  },
})
