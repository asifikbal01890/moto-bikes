import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getBikes = createAsyncThunk <any,void> ("bikes/getBikes", async () => {
    const res = await axios.get(`http://localhost:5000/allBikes`);
    // const data = await res.json;
    return res.data;
})

export const getBikeById = createAsyncThunk<any,string>(
  "bikes/getBikeById", async (id:string) => {
    const res = await axios.get(`https://trade-motors-server-site.vercel.app/bikes?id=${id}`)
    return res.data;
  }
)

type bikesType ={
bikes: any[],
count: number,
isLoading: boolean,
isError: boolean,
error: string | null,
bike: any,
id: string
}

const initialState: bikesType = {
  bikes:[],
  count: 0,
  isLoading: false,
  isError: false,
  error: '',
  bike:[],
  id: ''
}

const bikeSlice = createSlice({
    name: "bikes",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getBikes.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = '';
        });
        builder.addCase(getBikes.fulfilled, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = false;
          state.bikes = action.payload;
        });
        builder.addCase(getBikes.rejected, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload || 'Failed to fetch bikes data';
        });
        builder.addCase(getBikeById.pending,(state)=>{
          state.isLoading = true;
     
        });
        builder.addCase(getBikeById.fulfilled, (state, action:PayloadAction<any>) =>{
          state.isLoading = false;
          state.isError = false;
          state.bike = action.payload;
          state.error = null
        });
        builder.addCase(getBikeById.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.bike = {};
          state.error = action.error.message || 'Failed to fetch bikes data';
        })
    }
});


export default bikeSlice.reducer;