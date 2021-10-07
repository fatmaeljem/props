// import logo from './logo.svg';
import "./App.css";
import Profile from "./Profile";
import Child from "./Child";
import cc from './vv.jpg';


const handleAlert = () => {
  alert(`this is the User`);
};

const fullname = "  farhat fatma";

 
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Profile
          hey={fullname}
          Bio="3 years experience in an online sales company: 1 year experience as a photographer then, 2 years and more responsible for stock in the same company I have a excellent training and experience in the field of online sales and cough that is sales and customer relations."
          Profession="  chez Société essaker (Qualité prix raisonnable)  
          agent Contrôle
          novembre 2020 - Present (1 an)
          Eljem
          
         Gestionnaire de stock
          
          juin 2018 - novembre 2020 (2 ans 6 mois)

          Photographe commercial
          octobre 2017 - juin 2018 (9 mois) "
        />
  
  <div><img src ={cc} alt="" /></div>


        <Child handleAlert={handleAlert} />
      </header>
    </div>
  );   

}

export default App;
