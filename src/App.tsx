import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Layout from './components/Layout.component';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

import YukerProvider from './context/YukerProvider';

function App() {
  return (
    <YukerProvider>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/services'>
              <Services />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </YukerProvider>
  );
}

export default App;
