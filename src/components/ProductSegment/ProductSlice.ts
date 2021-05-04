import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductState } from "./ProductInterface";

const baseUrl = "https://ecomm-products.modus.workers.dev/";

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const response = await axios({
      url: baseUrl,
      method: "get",
    });
    const { data } = response;
    return data.slice(0, 5);
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: initialState as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = "Oops! Something went wrong, kindly try again.";
    });
  },
});

export default productSlice.reducer;
