import logo from './Assets/PollySpeakLogo.png';
import './App.css';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
      </header>
    </div>
  );
}

export default App;
