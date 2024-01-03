import './Login.css';

const Login = () => {
    return (
        <div className="loginForm">
        
        <input type="text" className="UserName" placeholder="Email"></input>
        <input type="text" className="Password" placeholder='Password'></input>
        <button className="loginButton">LOGIN</button>

        </div>
    );
}

export default Login; 