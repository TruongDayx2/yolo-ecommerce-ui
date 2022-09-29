import { createSlice } from "@reduxjs/toolkit";

const items= localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = { value:items}

export const cartItemSlide = createSlice({
    name:'cartItems',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem = action.payload

            const duplicate =findItem(state.value,newItem)
            if (duplicate.length > 0){
                state.value = delItem(state.value,newItem)

                state.value = [...state.value,{
                    ...newItem,
                    id:duplicate[0].id,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            }else{
                state.value = [...state.value,{
                    ...newItem,
                    id:state.value.length > 0 ? state.value[state.value.length -1 ].id +1 : 1
                }]
            }
            localStorage.setItem('cartItems',JSON.stringify(sortItem(state.value)))
        }
        //console.log(cartItem)
    }
})

const findItem = (arr,item) => arr.filter(e=>e.slug===item.slug && e.color === item.color && e.size === item.size)
const delItem = (arr,item) => arr.filter(e=>e.slug!==item.slug || e.color !== item.color || e.size !== item.size)
const sortItem = (arr) => arr.sort((a,b)=>a.id > b.id ? 1: (a.id < b.id ? -1 : 0))

export const { addItem } = cartItemSlide.actions

export default cartItemSlide.reducer


