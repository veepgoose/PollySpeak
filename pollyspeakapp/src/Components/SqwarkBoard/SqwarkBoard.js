import './SqwarkBoard.css';
import logo from '../../Assets/PollySpeakLogo.png';


const SqwarkBoard = () => {
    return (
        <div className= "SqwarkBoard-Header">
            <img src={logo} className="Polly-logo" alt="logo" />

        <div className= "SqwarkBoard">
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Cashew</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Pepper</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Sweetcorn</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Walnut</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Orange</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Chickpea</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Monkey Nut</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Grape</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">Cucumber</span>
        </button>


        </div>
        </div>
    )
}

export default SqwarkBoard;