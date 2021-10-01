import React from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { useDispatch } from 'react-redux';
export const Bot_details = () => {
    const params = useParams(); //taking bot id from url. useParams() will return an object having id as key.

    // now filtering all bots data based on id recieved from url
    const bots = useSelector(state => state.bots_data);
    let Bot = bots.filter(bot => {
        return bot.id === Number(params.id);
    })
    // After filtering is over Bot variable will hold an array of object. the object inside the array represents 
    // the bot data object which has id equal to the id recieved from url.
    // if params holds 1 then if i console.log(Bot); =>[{id:1,bot:'hot bot',decription:'hot bot is....',index_value:289.3,CAGR:34,index:1}]
    // Bot[0] = {id:1,bot:'hot bot',decription:'hot bot is....',index_value:289.3,CAGR:34,index:1}

    const cart_arr = useSelector(state => state.cart);
    // console.log(cart_arr) => [{total:0},{id:1,quantity:0},{id:2,quantity:0},{id:3,quantity:0}]
    const item_quantity = cart_arr[Bot[0].index].quantity;
    // now Bot[0].index = 1, so cart_arr[1].quantity will give the quantity of bot 1.item_quantity will be used down in jsx.

    // this thing is same as it was in Bot.js
    const dispatch = useDispatch();
    const AddHandler = (event) => {
      event.preventDefault();
      dispatch({
        type: 'AddToCart',
        payload: Number(Bot[0].id)
      })
}
      const removeHandler = (event) => {
      event.preventDefault();
      dispatch({
        type: 'remove',
        payload: Number(Bot[0].id)
      })
}
    return (
        <div style={{marginTop:"10px"}}>
            
            <div className="card">
                <div className="card-header">
                <h4>Bot algo</h4>
                </div>
                <div className="card-body">
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{height:"180px",width:"20%"}} alt="Card image cap"/>
                       <h2 className="card-title">{Bot[0].bot}</h2>
                        <p className="card-text">{Bot[0].description}</p>
                        <p className="card-text"><h5>index value: {Bot[0].index_value}</h5></p>
                        <p className="card-text"><h5>CAGR: {Bot[0].cagr}</h5> </p>
                        <button class="btn btn-secondary btn-dark" disabled style={{backgroundColor:'blue',color:"white"}}>Moderate Risk</button>
                        {/* if item_quantity will be > 1 inc/dec button will be shown else Add to cart button will be shown */}
                        {item_quantity<=0?<button type="button" className="btn btn-danger" onClick={AddHandler} style={{marginLeft:"20px"}}>Add To Cart</button>:
                            <div className="btn-group" style={{marginLeft:"20px"}} role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary" onClick={removeHandler}><strong>-</strong></button>
                                <h4>{item_quantity}</h4>
                                <button type="button" className="btn btn-secondary" onClick={AddHandler}><strong>+</strong></button>   
                            </div>   
                    }
                </div>
            </div>
        </div>
        
    )
}


