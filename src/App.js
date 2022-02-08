import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
