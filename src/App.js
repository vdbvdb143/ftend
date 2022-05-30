import {
  BrowserRouter as Router, 
  Route,
} from "react-router-dom";

import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path={"/login"}>
            <Login/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
