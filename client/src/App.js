
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Home from './view/Home';
import PetForm from './components/PetForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './view/Detail';
import EditPet from './components/EditPet';
function App() {
  return (
    <div className="">
      <h1>PetShelter</h1>
      <Switch>
        <Route path="/add/pet">
          <PetForm />
        </Route>
        <Route path="/pet/home">
          <Home />
        </Route>

        <Route path="/pet/details/:_id">
          <Details />
        </Route>

        <Route path="/pet/edit/:_id">
          <EditPet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
