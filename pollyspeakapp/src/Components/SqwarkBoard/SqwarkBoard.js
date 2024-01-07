import './SqwarkBoard.css';
import logo from '../../Assets/PollySpeakLogo.png';


const SqwarkBoard = () => {
    return (
        <div className= "SqwarkBoard-Header">
            <a href="/"><img src={logo} alt="PollySpeak Logo" className="Polly-logo"/></a>

        <div className= "SqwarkBoard">
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">CASHEW</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">PEPPER</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">SWEETCORN</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">WALNUT</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">ORANGE</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">CHICKPEA</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">MONKEY NUT</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">GRAPE</span>
        </button>
        <button className="Sqwark-Button" aria-label="Cashew" >
         <span className="Sqwark-ButtonLabel">CUCUMBER</span>
        </button>


        </div>
        </div>
    )
}

export default SqwarkBoard;