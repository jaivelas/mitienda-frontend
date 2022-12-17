import logo from './logo.svg';
import './App.css';
//import LogPage from './components/home/logPage'
//import NavPage from './components/home/navPage'
//import CatPage from './components/home/catPage'
//import VidPage from './components/home/vidPage'
import HomePage from './components/home/homePage'

function App() {
  return (
    //dentro del este div esta el llamado a cada page.
    //se cambia por el llamado a la homepage creada
    <div>
      
      <HomePage/>
    
      
    </div>
  );
}

export default App;
