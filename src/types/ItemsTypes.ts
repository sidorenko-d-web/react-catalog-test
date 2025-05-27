export interface IItem {
  id: number
  name: string
  colors: IColor[]
}

export interface IColor {
  id: number
  name: string
  images: string[]
  price: string
  description: string
  sizes: number[]
}

export interface ISizeRespose {
  id: number
  label: string
  number: number
}

export type CartItem = {
  itemId: number
  colorId: number
  sizeId: number
}
