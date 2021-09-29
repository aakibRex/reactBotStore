import React from 'react'
import { Bot } from "../components/Bot";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export const BotList = () => {
    const bots = useSelector(state => state.bots_data);
      const parent_div_style = {
      display:"flex",
      flexDirection: "row",
      justifyContent:"center",
      marginTop:"10px",
  }
    return (
       
        <div  className="parent" style={parent_div_style}>
            {bots.length === 0 ? <h4>*no bots to display*</h4> :
                    bots.map((bot) => {
                    return <Bot bot={bot} key={bot.id} />
                })
            }
        </div>
    )
        
}


