import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export const app = createModel<RootModel>()({
  state: {
    cartIsOpen: false,
  },
  reducers: {
    TOGGLE_CART (state, isOpen) {
      return {
        ...state,
        cartIsOpen: isOpen
      }
    }
  },
  effects: (dispatch) => ({
    toggleCart (isOpen: boolean) {
      dispatch.app.TOGGLE_CART(isOpen)
    }
  })
})
