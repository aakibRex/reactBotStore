import React from 'react'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
export const Bot_details = () => {
    const params = useParams();
    const bots = useSelector(state => state.bots_data);
    let Bot = bots.filter(bot => {
        return bot.id === Number(params.id);
    })
    // console.log(Bot);
    return (
        <div>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{height:"400px",width:"30%"}} alt="Card image cap"/>
            <h3>hi i am {Bot[0].bot}</h3> <br/>  
            <h3>my id is: {Bot[0].id}</h3>  <br/> 
            <h3>here is my description {Bot[0].description}</h3> <br/>  
            <h3>my index value is: {Bot[0].index_value}</h3>  <br/> 
            <h3>checkout my CAGR: {Bot[0].cagr}</h3>  <br/> 
        </div>
    )
}


