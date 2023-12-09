import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExist = state.value.find((item) => item.id === action.payload.id)
      if (isItemExist) {
        isItemExist.quantity++
        return
      }
      state.value.push({...action.payload, quantity: 1})
    },
    incrementQty: (state, action) => {
      const findItem = state.value.find((item) => item.id === action.payload)
      findItem.quantity++
    },
    decrementQty: (state, action) => {
      const findItem = state.value.find((item) => item.id === action.payload)
      if (findItem.quantity != 1) {
        findItem.quantity--
      }
    },
    deleteCart: (state, action) => {
      const filterItem = state.value.filter((item) => item.id !== action.payload)
      state.value = filterItem
    },
  },
});
export const { addToCart, incrementQty, decrementQty, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
