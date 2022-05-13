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
      return {
        ...state,
        products: products,
      };
    },
  },
  effects: (dispatch) => ({
    addItem({ product, quantity }: AddItemEffectProps, rootState) {
      let products: CartProduct[] = rootState.cart.products.slice();
      let addProduct = true;
      products.map((item: CartProduct) => {
        if (product.id === item.id) {
          item.quantity += quantity;
          addProduct = false;
        }
      });
      if (addProduct) {
        products = [...products, { ...product, quantity }];
      }
      dispatch.cart.CART_ADD_ITEM(products);
    },
  }),
});
