export const cartReducer=(state,action)=>{
    switch (action.type) {
        case "SET_PRODUCTS":
          return {
            ...state,
            products: action.payload
          };
        case "ADD_TO_CART":
            return{...state,cart:[...state.cart,{
                ...action.payload,
                qty:1,
                id: action.payload.product_id
            }]
        };
        case "REMOVE_FROM_CART":
            return{...state,cart:state.cart.filter((c)=>c.product_id !== action.payload)};
        default:
            return state;
    }
}