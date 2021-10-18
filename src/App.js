import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Home/About/About';
import Contact from './Home/Contact/Contact';
import Doctors from './Home/Doctors/Doctors';
import Home from './Home/Home/Home';
import Login from './Home/Shared/Login/Login';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
