;(async () => {
  const { bootstrap } = await import("./bootstrap")
  bootstrap(document.querySelector<HTMLDivElement>("#root"))
})()
