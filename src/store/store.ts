import { create } from 'zustand'
import type { CartItem } from '../types'
import { compareCartItem } from '../helpers'

type CartItemStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
}

export const useCartItemStore = create<CartItemStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    const exists = get().items.some((i) => compareCartItem(item, i))

    if (!exists) {
      set((state) => ({ items: [...state.items, item] }))
    }
  },

  removeItem: (item) => {
    set((state) => ({
      items: state.items.filter((i) => !compareCartItem(item, i))
    }))
  }
}))
