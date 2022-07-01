import "./TodoList.scss"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const TodoList = () => {
    // const [todo, setTodo] = useState([
    //     {id: 1, title: "doing homeword",}
    // ])
    // const [item, setItem] = useState({})
    const [inp, setInp] = useState("")

    //add todo
    // const addTodo = (event) => {
    //     if (event.key === "Enter") {
    //         // console.log("inp: ", inp)
    //         // setItem({
    //         //     id: Math.floor(Math.random() * 100),
    //         //     title: inp
    //         // })
    //         let item = {
    //             id: Math.floor(Math.random() * 1000),
    //             title: inp
    //         }
    //         setTodo([
    //             ...todo, item
    //         ])
    //         setInp("")
    //     }
    // }

    // const removeTodo=(todo)=>{
    //     console.log(todo.id)
    //     let currentTodos = todo
    //     currentTodos = todo.filter(item => item.id !== todo.id)
    //     setTodo(currentTodos)
    // }
    // useEffect(()=>{
    //
    // },[setTodo])

    const todo = useSelector(state => state.users)
    const dispatch = useDispatch()
    const addRandom = () =>{
        dispatch({
            type: 'ADD_USER'
        })
    }
    const deleteUser = (item) =>{
        dispatch({
            type: 'DELETE_USER',
        })
    }
    return (
        <div className="todoList">
            {/*<input type="text" value={inp} onKeyPress={addTodo} onChange={(event) => setInp(event.target.value)}/>*/}
            <div className="output">
                {
                    todo.length > 0 && todo.map((item, index) => {
                        return (
                            <div key={item.id} className="out">
                                <div>
                                    {index + 1} - {item.name}
                                    <button onClick={()=>deleteUser(item)}>x</button>
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={addRandom}>Or add random</button>
            </div>
        </div>
    )
}

export default TodoList