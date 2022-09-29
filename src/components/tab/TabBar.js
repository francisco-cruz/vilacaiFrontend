import React from "react";
import './tabBar.css'
function TabBar() {


    return (
        <div className="tab">
            <div className="lineTop"></div>
            <button id="tabDefault" className="tabButton">Açaí</button>
            <button className="tabButton" >Sorvetes</button>
            <button className="tabButton" >Snacks</button>
            <button className="tabButton" >Bebidas</button>
        </div>
    )
}


export default TabBar