import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Layout from "./components/layout"
import Main from './components/main';
import Post from './components/post';
import About from './components/about';
import Contact from './components/contact';

class App extends React.Component {
  render = () => {
    return(
      <Router>
        <Layout>
          <Switch>
          <Route path="/o-mnie">
            <About/>
          </Route>
          <Route path="/kontakt">
            <Contact/>
          </Route>
          <Route path="/:id">
            <Post/>
          </Route>
          <Route path="/">
            <Main />
          </Route>
          </Switch>
        </Layout>
      </Router>);
  }
}

export default App;
