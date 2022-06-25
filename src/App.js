import Nav from "./Views/Components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoList from "./Views/Pages/TodoList";
// import {useState} from "react";

const App = () => {
    // const [name, setName] = useState("")


    // const outputName = (event) => {
    //     if (event.key === "Enter") {
    //         console.log("name: ", name)
    //         setName("")
    //     }
    // }
    return (

        <Router>
            <Nav/>
            <Routes>
                <Route path="/todo" element={<TodoList/>}/>
            </Routes>
        </Router>
    );
}

export default App;
