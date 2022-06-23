import Nav from "./Views/Nav";
// import {useState} from "react";
import Main from "./Views/Main";

const App = () => {
    // const [name, setName] = useState("")


    // const outputName = (event) => {
    //     if (event.key === "Enter") {
    //         console.log("name: ", name)
    //         setName("")
    //     }
    // }
    return (
        <div className="App">
            <Nav/>
            {/*<input type="text"*/}
            {/*       value={name}*/}
            {/*       onChange={(event) => setName(event.target.value)}*/}
            {/*       onKeyPress={outputName}*/}
            {/*/>*/}
            <Main/>
        </div>
    );
}

export default App;
