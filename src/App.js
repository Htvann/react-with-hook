import Nav from "./Views/Components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Views/Pages/Home/Home";
import TodoList from "./Views/Pages/Todo/TodoList";
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
                <Route path="/" element={<Home/>}/>
                <Route path="/todo" element={<TodoList/>}/>
            </Routes>
        </Router>
    );
}

export default App;
