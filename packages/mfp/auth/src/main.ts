;(async () => {
  const { bootstrap } = await import("./bootstrap")
  const container = document.querySelector<HTMLDivElement>("#root")
  if (container) {
    bootstrap({ container, routerConfig: { type: "browser" } })
  }
})()
