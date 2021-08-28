import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./screens/Login/"
import Register from "./screens/Register/"


function AppRoutes(){
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/*
          <Route path="/user_profile"> {/*Will have nested routing
            <UserProfile />
          </Route>
          <Route path="/new_plant_approval"> {/*Will have nested routing
            <NewPlantApproval />
          </Route>
          <Route path="/"> 
            <Home />
          </Route>
          <Route path="/fav_plants">  {/*Will have nested routing
            <FavPlants />
          </Route>
          <Route path="/fav_plants_public"> {/*Will have nested routing
            <FavPlantsPublic />
          </Route>
          <Route path="/comentaries"> {/*Will have nested routing
            <Comentaries />
          </Route>
          <Route path="/add_plant"> 
            <AddPlant />
          </Route>
          */}
        </Switch>
    </Router>
  );
}

export default AppRoutes;