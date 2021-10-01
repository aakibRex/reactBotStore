import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
// bot is passed from BotList.js through props which is first destructured and then used.
export const Bot = ({bot}) => {
    //getting cart data from store/index.js using useSelecter() which is assigned to cart_arr.
    // cart = [{total:0},{id:1,quantity:0},{id:2,quantity:0},{id:3,quantity:0}] this is initial cart array in 
    // store/index.js
    const cart_arr = useSelector(state => state.cart);

    const item_quantity = cart_arr[bot.index].quantity;
    // each bot object has an index key, and its value is that index number of the cart array where the id of
    // this bot object is present.
    // if bot.index==1 then cart_arr[1] will fetch {id:1,quantity:0} now from this quantity will be fetched and 
    // assigned to item_quantity.
    
      const dispatch = useDispatch();

      const AddHandler = (event) => {
        event.preventDefault();
        // dispatching action object with type and payload for add to cart and increment cart feature.
        dispatch({
          type: 'AddToCart',
          payload: Number(bot.id)
        })
  }
        const removeHandler = (event) => {
        // dispatching action object with type and payload for decrement cart feature.    
        event.preventDefault();
        dispatch({
          type: 'remove',
          payload: Number(bot.id)
        })
  }
    return (
        <div>
            <div className=" container" >
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{height:"200px",width:"100%"}} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{bot.bot}</h5>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong style={{color:"gray"}}>Index value - </strong> {bot.index_value}</li>
                    <li className="list-group-item" style={{color:"green"}}><strong style={{color:"gray"}}>CAGR - </strong >{bot.cagr}</li>
                </ul>
                <div className="card-body">
                    <Link to={"Bots/"+bot.id} ><button type="button" className="btn btn-info">View Algo</button></Link><br/><br/>
                    {/* used ternary operator for displaying Add To Cart button and inc/dec button based on condition */}
                    {item_quantity<=0?<button type="button" className="btn btn-danger" onClick={AddHandler}>Add To Cart</button>:
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary" onClick={removeHandler}><strong>-</strong></button>
                                <h4> {item_quantity} </h4>
                                <button type="button" class="btn btn-secondary" onClick={AddHandler}><strong>+</strong></button>
                            </div>   
                    }
                </div>
            </div>
            </div>
        </div>
        
    )
}


