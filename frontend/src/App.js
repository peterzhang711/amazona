import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <div classNameName="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazona
            </a>
          </div>
          <div> 
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          {/* 注册路由 */}
          <Route path="/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Copy Right Amazona</footer>
      </div>
      </BrowserRouter>
  );
}

export default App;
