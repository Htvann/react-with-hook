import "./Main.scss"
import {useEffect, useState} from "react";

const Main = () => {

    const [todo, setTodo] = useState([
        {id: 1, title: "doing homeword",}
    ])
    // const [item, setItem] = useState({})
    const [inp, setInp] = useState("")
    const addTodo=(event)=>{
        if (event.key === "Enter") {
            // console.log("inp: ", inp)
            // setItem({
            //     id: Math.floor(Math.random() * 100),
            //     title: inp
            // })
            let item = {
                id:Math.floor(Math.random() * 100),
                title: inp
            }
            setTodo([
                ...todo,item
            ])
            setInp("")
        }
    }
    // useEffect(()=>{
    //
    // },[setTodo])
    return (
        <div className="todoList">
            <input type="text" value={inp} onKeyPress={addTodo} onChange={(event)=>setInp(event.target.value)} />
            <div className="output">
                <p>Todo list</p>
                {
                    todo.length > 0 && todo.map((item, index)=>{
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.title}
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Main