import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component.jsx";

const Furnishing = () =>(
  <div><h1>Furnishing</h1></div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/furnishing' component={Furnishing} />
    </Switch>
    </div>
  );
}

export default App;
