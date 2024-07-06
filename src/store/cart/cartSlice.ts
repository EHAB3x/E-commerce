import { createSlice, createSelector } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import { RootState } from "../index";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});
const getTotalCartQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {    
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

export { getTotalCartQuantity };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
