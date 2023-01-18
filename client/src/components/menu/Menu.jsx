import { useRef,useEffect } from "react";
import Item from "./Item";

function Menu({name}) {
    return ( 
        <div style={{top:window.innerHeight-100 +"px"}} className="menu-paszamine">
           <Item name="home"/>
        </div>
     );
}

export default Menu;