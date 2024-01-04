import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="loginForm">
        
        <input type="text" className="UserName" placeholder="Email"></input>
        <input type="text" className="Password" placeholder='Password'></input>
        <Link to="/Dashboard">
        <button className="loginButton">LOGIN</button>
        </Link>

        </div>
    );
}

export default Login; 