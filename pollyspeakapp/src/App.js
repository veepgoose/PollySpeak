import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './Assets/PollySpeakLogo.png';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SqwarkBoard from './Components/SqwarkBoard/SqwarkBoard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
      </header>
    </div>
    } />
    
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/SqwarkBoard" element={<SqwarkBoard/>} />
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
