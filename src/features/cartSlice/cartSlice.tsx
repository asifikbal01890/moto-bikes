import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    cart: [],
    quantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selectedBike = state.cart.find(
                (bike: any) => bike._id === action.payload._id
            )

            if (!selectedBike) {
                const bike = { ...action.payload, quantity: 1 }
                state.cart.push(bike);

            }

        },
        incrementQuantity: (state, action) => {
            const selectedBike = state.cart.find(
                (bike: any) => bike._id === action.payload._id
            )

            if (selectedBike) {
                selectedBike.quantity += 1;
                state.cart.
                    filter((bike: any) => bike._id !== selectedBike._id)
                    .push(selectedBike)

            }

        },
        decrementQuantity: (state, action) => {
            const selectedBike = state.cart.find(
                (bike: any) => bike._id === action.payload._id
            )
            const selectedBikeIndex = state.cart.findIndex(
                (bike: any) => bike._id === action.payload._id
              );

            if (selectedBikeIndex !== -1) {
                const selectedBike = state.cart[selectedBikeIndex];
                
            if (selectedBike && selectedBike.quantity > 0) {
                selectedBike.quantity -= 1;
                state.cart.
                    filter((bike: any) => bike._id !== selectedBike._id)
                    .push(selectedBike)
            }
            if (selectedBike.quantity === 0) {
                state.cart.splice(selectedBikeIndex, 1); // Remove the bike from the cart
              }
            }

        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload._id;
            const updatedCart = state.cart.filter(
              (bike: any) => bike._id !== itemIdToRemove
            );
            state.cart = updatedCart;
          },
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
