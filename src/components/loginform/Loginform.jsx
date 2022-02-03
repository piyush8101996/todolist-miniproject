import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { logindata } from "../../action";
import TodoApp from "../todoapp/TodoApp";
import style from "./Login.module.css"

const Loginform = (props) => {
    const [password, setPassword] = useState('')
    const [username, setusername] = useState('')
    const [psserror, setPssError] = useState(false)
    const [usernameerror, setusernameerror] = useState(false)

    const dispatch=useDispatch();
    const login = useSelector((state) => state.loginReducer.logedin)


    const onusernamechangeHandler = (e) => {
        const item = e.target.value
        setusername(item)

    }

    const onPasswordchangeHandler = (e) => {
        const item = e.target.value
        setPassword(item)
    }


     const dologiniHandler = () => {
        if (!password) {
            setPssError(true)
        }

        if (!username) {
            setusernameerror(true)
        }
       
        if (username && password) {
            setusername('')
            setPassword('')
        }
         dispatch(logindata(username, password))
    }


    return (

        <>
            {login.logedin && (
                <div><TodoApp/></div>
            )}
            {!login.logedin && (
                <>
                    <div className={style.body}>
                        <h2>Log In</h2>
                        <div className={style.form}>
                            <div>
                                <label>Username </label>
                                <div className={style.box} >
                                    <input className={usernameerror ? `${style.input} ${style.errormsg}` : style.input}
                                        type="text" placeholder="Enter username"
                                        value={username}
                                        onChange={onusernamechangeHandler} />
                                    {usernameerror && <span className={style.error}>{"Enter the username"}</span>}
                                </div>
                            </div>

                            <div>
                                <label>Password</label>
                                <div className={style.box}>
                                    <input className={psserror ? `${style.input} ${style.errormsg}` : style.input}
                                        type="password" placeholder="Enter password"
                                        value={password}
                                        onChange={onPasswordchangeHandler}
                                    />
                                    {psserror && <span className={style.error}>{"Enter the password"}</span>
                                    }
                                </div>
                            </div>

                            <div>
                                <input className={style.checkbox} type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <div >
                                <button className={style.button} disabled={props.isloading} onClick={ dologiniHandler}>Login</button>
                            </div>
                            <div>
                                {login.loginfail && (
                                    <span style={{ color: 'red' }}> Login Fail</span>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>)
}
export default Loginform;