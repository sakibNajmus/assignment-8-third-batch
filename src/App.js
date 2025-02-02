import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Home/Header/Header';
import Home from './components/Home/Header/Home/Home';
import TeamDetails from './components/Home/Header/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        {/* Using Sports API */}
        <Route path="/teams/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        
        {/* Using Covid API */}
        {/* <Route path="/countries/:country">
          <TeamDetails></TeamDetails>
        </Route> */}

        {/* Using Dog API */}
        {/* <Route path="/breed/:team">
          <TeamDetails></TeamDetails>
        </Route> */}

        
        <Route path="/">
            <Home></Home>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
