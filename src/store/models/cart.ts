import { createModel } from "@rematch/core";
import type { RootModel } from "./models";
import { Product, CartProduct } from "../../schema/app/entity";

type AddItemEffectProps = {
  product: Product;
  quantity: number;
};

export const cart = createModel<RootModel>()({
  state: {
    products: <CartProduct[]>[],
  },
  reducers: {
    CART_ADD_ITEM(state, products: CartProduct[]) {
      state.products = products;
    },
  },
  effects: (dispatch) => ({
    addItem({ product, quantity }: AddItemEffectProps, rootState) {
      const cartProducts: CartProduct[] = rootState.cart.products;
      let addProduct = true;
      let products = cartProducts.map((item: CartProduct) => {
        if (product.id === item.id) {
          addProduct = false;
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      if (addProduct) {
        products = [...products, { ...product, quantity }];
      }
      dispatch.cart.CART_ADD_ITEM(products);
    },
  }),
});
