import './Dashboard.css';
import logo from '../../Assets/PollySpeakLogo.png';
import ParrotIcon from '../../Assets/ParrotIcon.png';


const Dashboard = () => {
    return(
        <div className="Dashboard-Header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <h1 className="SqwarkBoards">SQWARKBOARDS</h1>

        <div className="Dashboard-body">
            <div className="Profile1">
            <img src={ParrotIcon} className="Parrot-Icon" alt="logo" />
            <h1 className="ProfileName">YOSHI</h1>
            </div>
             <div className="Profile1">
            <img src={ParrotIcon} className="Parrot-Icon" alt="logo" />
            <h1 className="ProfileName">BUZZ</h1>
            </div>
            <div className="Profile1">
            <img src={ParrotIcon} className="Parrot-Icon" alt="logo" />
            <h1 className="ProfileName">OSCAR</h1>
            </div>

        </div>
        </div>

     
       

    
    );
}



export default Dashboard;