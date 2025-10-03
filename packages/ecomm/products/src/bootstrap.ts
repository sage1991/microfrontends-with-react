import { faker } from "@faker-js/faker"

export const bootstrap = (root?: HTMLElement | null) => {
  if (!root) {
    return
  }

  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div")
    div.textContent = faker.commerce.productName()
    fragment.appendChild(div)
  }
  root.appendChild(fragment)
}
