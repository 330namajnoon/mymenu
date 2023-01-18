import { useContext } from "react";
import AppContext from "../../contexts/app";

function Item({name}) {
    const {pagechenge,page} = useContext(AppContext);
    const styles = {
        s1: {
            backgroundColor: "aquamarine",
        },
        s2: {
            backgroundColor: "rgb(71, 104, 93)",
        }
    }
    return ( 
        <div style={page.name == name ? styles.s1 : styles.s2} className="menu-item">

        </div>
    );
}

export default Item;