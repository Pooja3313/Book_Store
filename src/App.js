import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Profile from './components/Profile';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {

    const name="Pooja";

    const clickme = ()=> alert("alert");

  return (
    <BrowserRouter>
   
    <div className="App" >
      {/* <header className="App-header" > */}
      <Navbar />
      <Routes >
          <Route path='/Home' element={<Home/>} />
          
          <Route path='/Props' element={<User name={name} fun={clickme} />}></Route>
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Contact' element={<Contact/>} />
      
      </Routes>
        
        {name}
        <br/>
        <Link to='/' >HOME PAGE</Link>
        <br/>
        <Link to='/Profile'>PROFILE PAGE</Link>

        
      
          
     
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;