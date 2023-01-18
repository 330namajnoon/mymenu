import "../styles/app.css";
import { useRef,useEffect,useState,useContext } from "react";
import Menu from "./menu/Menu";
import AppContext from "../contexts/app";
import Home from "./pages/Home";
function App() {
    const pages = {
        home: {
            name: "home",
            component:<Home/>
        }    
    }
    const [page,setPage] = useState(pages.home);
    return ( 
        <AppContext.Provider values={{pagechebge,page}}>
            <div style={{width:`${window.innerWidth}px`,height:`${window.innerHeight}px`}}  className="paszamine">
                <Menu select={page.name} />
            </div>
        </AppContext.Provider>
       
     );

     function pagechebge(name) {
        setPage(pages[name]);
     }
    
    
}

export default App;