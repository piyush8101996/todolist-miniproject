import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../action/index";


const Navbar = () => {
    const dispatch=useDispatch();
    const login = useSelector((state) => state.loginReducer.logedin)
    

    return (
        <nav className={style.navbar}>
            <div className={style.title}>TODO LIST</div>

            <div className={style.navbarlink}>
                <ul>
                    <li>
                        <Link className={style.link} to="/">Home</Link>
                    </li>

                    {!login.logedin&&(
                       <li>
                       <Link className={style.link} to="/Login">Login</Link>
                       </li>   
                    )}

                    {login.logedin && (
                        
                        <li> <a className={style.link} href="##" onClick={()=>dispatch(logout())}>Logout</a> </li>   
                    )}
                  
                    {login.logedin && (
                        <li >
                            {<span className={style.link} >{login.username}</span>}
                        </li>
                    )}
                    {!login.logedin && (
                        <li >
                            {<span className={style.link} >Hello Guest</span>}
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;
