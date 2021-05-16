import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import AllBlogs from './Components/AllBlogs/AllBlogs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/allBlog">
          <AllBlogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
