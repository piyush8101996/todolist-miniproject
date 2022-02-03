import { Link } from "react-router-dom";
//import style from "../../../navbar/Navbar.module.css"
const Home=()=>{
    return(
        <div>
            <h1>Homepage</h1>
            <h3>Hello Guest Welcome to Todolist App Create your Daily Todotask to be done by just  <span><Link  to="/Login">Login</Link></span></h3>
        </div>
    )
}
export default Home;