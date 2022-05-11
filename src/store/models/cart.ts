import { createModel } from '@rematch/core'
import type { RootModel } from './models'
import { CartProduct } from '../../schema/app/entity'

export const cart = createModel<RootModel>()({
  state: {
    products: [],
  },
  reducers: {
    CART_ADD_ITEM (state, products) {
      return {
        ...state,
        products
      }
    }
  },
  effects: (dispatch) => ({
    addItem ({ product, quantity }, rootState) {
      let products: CartProduct[] = rootState.cart.products.slice()
      let addProduct = true
      products.map((item: CartProduct) => {
        if (product.id === item.id) {
          item.quantity += quantity
          addProduct = false
        }
      })
      if (addProduct) {
        products = [...products, {...product, quantity }]
      }
      dispatch.cart.CART_ADD_ITEM(products)
    }
  })
})
