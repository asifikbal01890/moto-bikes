import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState: any = {
    categories:[],
    isLoading: false,
    isError: false,
    error: '',
}

export const getCategories = createAsyncThunk <any,void> ("categories/getCategories", async () => {
    const res = await axios.get('https://trade-motors-server-site.vercel.app/categories');
    return res.data;
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = '';
        });
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = false;
          state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload || 'Failed to fetch categories data';
        });
    }
});

export default categorySlice.reducer;