import React from "react";
import HomePage from "./components/Landing-pages/Home-page/Home.jsx";
import Room from "./components/Landing-pages/Room-pages/Room.jsx";
import SingleRoom from "./components/Landing-pages/SingleRoom-page/SingleRoom.jsx";
import ErrorPage from "./components/Landing-pages/Error/ErrorPage.jsx";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar-page/NavBar.jsx";

const App = () => {
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:single-room" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
