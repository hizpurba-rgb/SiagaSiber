export const domain = (() => {
  if ($app.stage === "production") return "siagasiber.id"
  if ($app.stage === "dev") return "dev.siagasiber.id"
  return `${$app.stage}.dev.siagasiber.id`
})()

export const zoneID = "430ba34c138cfb5360826c4909f99be8"

// Regional hostname pinning — requires Addressing permission on CF token
// new cloudflare.RegionalHostname("RegionalHostname", {
//   hostname: domain,
//   regionKey: "us",
//   zoneId: zoneID,
// })

export const shortDomain = (() => {
  if ($app.stage === "production") return "siagasiber.id"
  if ($app.stage === "dev") return "dev.siagasiber.id"
  return `${$app.stage}.dev.siagasiber.id`
})()
