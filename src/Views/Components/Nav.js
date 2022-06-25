import "./Nav.scss"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todo Lists</NavLink>

            </div>
        </>

    )

}

export default Nav