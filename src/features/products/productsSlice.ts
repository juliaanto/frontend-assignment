import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../types/product";
import { RootState } from "../../app/store";
import { filterByName } from "../../helpers/filter";

interface CounterState {
  initialProductList: IProduct[];
  filteredProductList: IProduct[];
}

const initialState: CounterState = {
  initialProductList: [],
  filteredProductList: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.initialProductList = action.payload;
      state.filteredProductList = action.payload;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      state.filteredProductList = filterByName(state.initialProductList, action.payload);
    },
  },
})

export const { 
  setProducts,
  filterProducts,
} = productsSlice.actions;

export const getFilteredProducts = (state: RootState) => state.products.filteredProductList;

export default productsSlice.reducer;