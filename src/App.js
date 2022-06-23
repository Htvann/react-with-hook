import Nav from "./Views/Nav";
import {useState} from "react";

const App = () => {
    const [data, setData] = useState(1)
    const handleClick = () =>{
        console.log("check state: ", data)
        setData(data + 1)
    }
    return (
        <div className="App">
            <Nav/>
            <button onClick={()=>{handleClick()}}>click</button>
        </div>
    );
}

export default App;
