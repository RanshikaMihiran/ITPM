import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aboutus from './components/Aboutus';
import AddProject from './components/AddProject';
import AllProjects from './components/AllProjects';
import Header from './components/Header';
import Hero from './components/Hero';


import {BrowserRouter as Router, Route } from "react-router-dom";
import Patners from './components/Patners';
import Projects from './components/Projects';
import Donation from './components/Donation';
import Footer from './components/Footer';
import { Home } from './components/Home';




function App() {
  return (
    <Router>
      <div>
         <Header/> 
         
         <switch>
         <Route exact path="/add" component={AddProject} />

         <Route exact path ="/all" component={AllProjects}/>
         <Route exact path ="/" component={Home}/>
         

         </switch>

         <Footer/>
        {/* <AddProject/> */}
        
      </div>
    </Router>
   
  );
}

export default App;




