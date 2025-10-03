import { bootstrap as bootstrapCart } from "@ecomm/cart"
import { bootstrap as bootstrapProduct } from "@ecomm/products"

bootstrapCart(document.querySelector<HTMLDivElement>("#cart-root"))
bootstrapProduct(document.querySelector<HTMLDivElement>("#products-root"))
