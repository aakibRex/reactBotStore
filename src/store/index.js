import { createStore } from "redux";

let bots_data = [
  {id:1,
  bot:"hot bot",
  description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
  index_value:289.34,
  cagr:34,
  index:1
  },
  {id:2,
    bot:"Cool Bot",
    description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    index_value:439.34,
    cagr:28,
    index:2
    },
    {id:3,
      bot:"Options Bot",
      description:"Options Bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      index_value:139.34,
      cagr:42,
      index:3
      }
]
// defining initial state.
  const initialState = {
    bots_data : bots_data,
    cart: [{total:0},{id:1,quantity:0},{id:2,quantity:0},{id:3,quantity:0}],
  }
  // this is the reducer function which will handle add to cart and remove from cart functionality.
  const cartReducer = (state = initialState, action) => {

    // the purpose of filtering here is to know which bots quantity has to be increased or decreased.
    // filtering will be done based on id coming from action.payload which is dispatched when inc/dec or 
    // Add to cart button is clicked.
    let existingElem = state.cart.filter(item=>{
      return item.id === action.payload
    })

    if(action.type === "AddToCart") {

      state.cart[state.cart.indexOf(existingElem[0])].quantity += 1;
      state.cart[0].total = Number(state.cart[1].quantity+state.cart[2].quantity+state.cart[3].quantity);
      return {
        bots_data : bots_data,
        cart:[...state.cart],
      }  
    }
    if(action.type === "remove") {
      if (state.cart[0].total>0){
        state.cart[state.cart.indexOf(existingElem[0])].quantity-=1;
        state.cart[0].total = Number(state.cart[1].quantity+state.cart[2].quantity+state.cart[3].quantity);
      }
      else{
        state.cart[0].total = 0;
      }
      return {
            bots_data : bots_data,
            cart: [...state.cart],
      }
    }
    return state;
  }
  
  const store = createStore(cartReducer);
  
  export default store;