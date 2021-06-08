import React, { Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// React Router import
import { Switch, Route } from "react-router-dom";
// import pages
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={News} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/details" component={Details} />
    <Route  component={NotFoundPage} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
