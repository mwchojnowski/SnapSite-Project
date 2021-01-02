import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from "./pages/Landing"
import Platform from "./pages/Platform"
import Shopify from "./pages/Shopify"
import ShopifyPlus from "./pages/ShopifyPlus"
import About from "./pages/About"
import Blog from "./pages/Blog"
import CaseStudies from "./pages/CaseStudies"
import Nav from "./components/Nav/Nav"
import Careers from "./pages/Careers"
import Partner from "./pages/Partner"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/platforms">
          <Platform />
        </Route>
        <Route path="/shopify" exact>
          <Shopify />
        </Route>
        <Route path="/shopifyplus">
          <ShopifyPlus />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/case-studies">
          <CaseStudies />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/partner">
          <Partner />
        </Route>
        <Route path="/testing">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}