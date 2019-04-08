import React, { Component, Fragment } from 'react';
// import { Router, Route, Redirect } from "react-router";
import Router from './router'
import GlobalStyle from './style/base'
import './statics/iconfont/iconfont.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <GlobalStyle />
                {Router()}
            </Fragment>
        );
    }
}

export default App;