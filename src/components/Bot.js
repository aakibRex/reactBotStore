import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';

export const Bot = ({bot}) => {
    const cart_val = useSelector(state => state.cart[0]);

     const dispatch = useDispatch();

      const AddHandler = (event) => {
        event.preventDefault();

        dispatch({
          type: 'AddToCart'
        })
  }
        const removeHandler = (event) => {
        event.preventDefault();

        dispatch({
          type: 'remove'
        })
  }


    return (
        <div>
            <div className=" container" >
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{height:"200px",width:"100%"}} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{bot.bot}</h5>
                    <p className="card-text">{bot.description}</p>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Index value - </strong> {bot.index_value}</li>
                    <li className="list-group-item"><strong>cagr-</strong>{bot.cagr}</li>
                </ul>
                <div className="card-body">
                    <Link to={"Bots/"+bot.id} ><button type="button" className="btn btn-dark">View Algo</button></Link><br/><br/>
  
                    {cart_val<=0?<button type="button" className="btn btn-danger" onClick={AddHandler}>Add To Cart</button>:
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary" onClick={removeHandler}><strong>-</strong></button>

                                <button type="button" class="btn btn-secondary" onClick={AddHandler}><strong>+</strong></button>
                            </div>
                            
                    }

                </div>
            </div>
            <br/>
            </div>
            
        </div>
        
    )
}


