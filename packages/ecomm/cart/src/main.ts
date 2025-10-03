const { bootstrap } = await import("./bootstrap")

const root = document.querySelector<HTMLDivElement>("#root")
root && bootstrap(root)
