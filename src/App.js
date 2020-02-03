import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./Components/ScrollToTop";
import ContactPage from "./Pages/ContactPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import DevelopmentPortfolio from "./Pages/DevelopmentPortfolio.jsx";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <div>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Route
                      exact
                      path="/work/development"
                      component={DevelopmentPortfolio}
                    />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </div>
    </ScrollToTop>
  </Router>
);

export default Routes;
