import { createSlice } from "@reduxjs/toolkit"

const initialState: any ={
    cart : [],
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action ) => {
           const selectedBike = state.cart.find(
            (bike: any) => bike._id === action.payload._id
           )

           if (!selectedBike) {
            const bike = { ...action.payload, quantity: 1}
            state.cart.push(bike);
           } else {
            selectedBike.quantity += 1;
            state.cart.
            filter((bike:any) => bike._id !== selectedBike._id)
            .push(selectedBike)
           }
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;