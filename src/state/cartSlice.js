import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    finalAmount: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // const product = action.payload;
            // const findProduct = state.products.find(item => item.id === product.id);
            // if (findProduct) {
            //     findProduct.quantity += 1;
            // } else {
            //     state.products.push(action.payload)
            // }

            const cartProduct = action.payload

            let findProduct = state.products.find((eachData) => {
                return eachData.id === cartProduct.id
            });

            console.log(findProduct);

            if (findProduct) {
                findProduct.quantity += 1
            } else {
                state.products.push(cartProduct)
            }
        },

        removeProductToCart: (state, action) => {

            let productId = action.payload

            let products = state.products.filter((item) => {
                return item.id !== productId
            })

            state.products = products
        },

        incrementQuanity: (state, action) => {
            const productId = action.payload

            let findProduct = state.products.find((item) => {
                return item.id === productId
            })

            if (findProduct) {
                findProduct.quantity += 1
            }
        },

        decrementQuanity: (state, action) => {
            const productId = action.payload

            let findProduct = state.products.find((item) => {
                return item.id === productId
            })

            if (findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1
            }
        },

     // ------------cart total----------
     
        setTotalAmount: (state, action) => {
            state.finalAmount = action.payload
        },
        setDiscountAmount: (state, action) => {
            // console.log(action.payload);
            state.finalAmount = state.finalAmount -= action.payload
            console.log(state.finalAmount);
        }
    }
});

export const { addToCart, removeProductToCart, incrementQuanity, decrementQuanity,setTotalAmount,setDiscountAmount } = cartSlice.actions;
export default cartSlice.reducer;
