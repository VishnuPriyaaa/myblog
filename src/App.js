import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import NotFoundPage from './pages/NotFoundPage';
//Switch component  makes sure that only one of the routes is rendered at a time so we have to place the 404 in the end
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} exact/>
          <Route path="/articles-list" component={ArticlesListPage}/>
          <Route path="/article/:name" component={ArticlePage} exact/>
          <Route component={NotFoundPage} exact/>
          </Switch>
        
        </div>
    </div>
    </Router>
    
  );
}

export default App;
