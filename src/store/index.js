import { createStore } from "redux";


const initialState = {
    bots_data : [
    {id:1,
    bot:"hot bot",
    description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    index_value:289.34,
    cagr:34,
    img:"bot_pic.img"
    },
    {id:2,
      bot:"Cool Bot",
      description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      index_value:439.34,
      cagr:28,
      img:"bot_pic.img"
      },
      {id:3,
        bot:"Options Bot",
        description:"Options Bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        index_value:139.34,
        cagr:42,
        img:"bot_pic.img"
        }
  ],
    isAuthenticated: false,
    cart: [0]
  }
  
  const cartReducer = (state = initialState, action) => {
    if(action.type === "AddToCart") {
      const new_cart_val = state.cart[0]+1;
      return {
    bots_data : [
    {id:1,
    bot:"hot bot",
    description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    index_value:289.34,
    cagr:34,
    img:"bot_pic.img"
    },
    {id:2,
      bot:"Cool Bot",
      description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      index_value:439.34,
      cagr:28,
      img:"bot_pic.img"
      },
      {id:3,
        bot:"Options Bot",
        description:"Options Bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        index_value:139.34,
        cagr:42,
        img:"bot_pic.img"
        }
  ],
        isAuthenticated: true,
        cart: [new_cart_val]
      }
    }
  
    if(action.type === "remove") {
      let decreament_val;
      if (state.cart[0]>0){
      decreament_val = state.cart[0]-1;
      }
      else{
        decreament_val = 0;
      }
      return {
            bots_data : [
    {id:1,
    bot:"hot bot",
    description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    index_value:289.34,
    cagr:34,
    img:"bot_pic.img"
    },
    {id:2,
      bot:"Cool Bot",
      description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      index_value:439.34,
      cagr:28,
      img:"bot_pic.img"
      },
      {id:3,
        bot:"Options Bot",
        description:"Options Bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        index_value:139.34,
        cagr:42,
        img:"bot_pic.img"
        }
  ],
        isAuthenticated: false,
        cart: [decreament_val]
      }
    }
  
    return state;
  }
  
  const store = createStore(cartReducer);
  
  export default store;