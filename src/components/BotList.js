import React from 'react'
import { Bot } from "../components/Bot";
import { useSelector } from "react-redux";

export const BotList = () => {
    // getting bots data from store/index.js. bots_data is an array of objects.
    const bots = useSelector(state => state.bots_data);
    // styling for rendering cards in row.
      const parent_div_style = {
      display:"flex",
      flexWrap:"wrap",
      flexDirection: "row",
      justifyContent:"center",
      marginTop:"10px",
  }
    return (
        <div  className="parent" style={parent_div_style}>
            {/* iterating over bots array  */}
            {bots.length === 0 ? <h4>*no bots to display*</h4> :
                    bots.map((bot) => {    
                        // each object of the bots array is passed to bot.js component. 
                    return <Bot bot={bot} key={bot.id}  />  
                })
            }
        </div>
    )    
}


