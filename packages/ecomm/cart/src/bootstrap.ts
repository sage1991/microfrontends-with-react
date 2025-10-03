import { faker } from "@faker-js/faker"

export const bootstrap = (root?: HTMLElement | null) => {
  if (!root) {
    return
  }
  const div = document.createElement("div")
  div.textContent = `You have ${faker.number.int({ min: 0, max: 20 })} items in your cart`
  root.appendChild(div)
}
