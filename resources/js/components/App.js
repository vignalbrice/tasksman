// resources/assets/js/components/App.js

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NewProject from "./NewProject";
import ProjectsLists from "./ProjectsLists";
import SingleProject from "./SingleProject";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProjectsLists} />
                        <Route path="/create" component={NewProject} />
                        <Route path="/:id" component={SingleProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
