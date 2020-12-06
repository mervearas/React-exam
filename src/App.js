import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from "./pages/Navigation";
import { createContext, useState } from "react";
import MODULES from "./modules";
import Bar from "./pages/Bar";
import Radar from "./pages/Radar";

function getDefaultDataSet() {
  return MODULES.map(module => {
    return Math.floor(Math.random() * 10)
  })
}

export const ModuleContext = createContext(getDefaultDataSet());

function App() {
  const [moduleDataSet, setModuleDataSet] = useState(getDefaultDataSet());

  return (
    <ModuleContext.Provider value={[moduleDataSet, setModuleDataSet]}>
      <div className="app-container">
        <Router>
          <Switch>
            <Route path="/" exact component={Navigation} />
            <Route path="/bar" exact component={Bar}/>
            <Route path="/radar" exact component={Radar}/>
          </Switch>
        </Router>
      </div>
    </ModuleContext.Provider>

  );
}

export default App;
