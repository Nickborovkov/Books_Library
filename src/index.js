import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    // When using BrowserRouter there's a bug with page refreshing on github-pages, that's why HashRouter used
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
    ,document.getElementById('root')
);
