 import Restuarent from "./Components/Body/Restuarent/Restuarent";
 import { Switch, Route, useHistory } from "react-router-dom";
import landing from "./Components/landing";
import details from "./Components/details";
import Navbar from "./Components/Header/Navbar";

 

function App() {
  return (

    <div>
        <Switch>
        <Route exact path="/" component={landing} />
        <Route  path="/details" component={details} />
       </Switch>
     </div>
  );
}

export default App;
