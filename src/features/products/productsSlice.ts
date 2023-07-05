import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../types/product";
import { RootState } from "../../app/store";

interface CounterState {
  productList: IProduct[];
}

const initialState: CounterState = {
  productList: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.productList = action.payload;
    },
  },
})

export const { 
  setProducts, 
} = productsSlice.actions;

export const getProducts = (state: RootState) => state.products.productList;

export default productsSlice.reducer;