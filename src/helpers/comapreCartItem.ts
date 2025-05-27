import type { CartItem } from "../types"

export const compareCartItem = (item1: CartItem, item2: CartItem) => {
  return (
    '' + item1.colorId + item1.itemId + item1.sizeId ===
    '' + item2.colorId + item2.itemId + item2.sizeId
  )
}