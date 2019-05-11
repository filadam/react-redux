import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Contact from './components/pages/contact/index'
import Home from './components/pages/home/index'
import About from './components/pages/about/about'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state = state + Math.random() * 1000;
        case 'DECREMENT':
            return state = state - Math.random() * 1000;
        case 'RESET':
            return state = state = 0;
        default:
            return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Provider store={store}>
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Contact' component={Contact} />
            </Provider>
        </div>
    </BrowserRouter>, document.getElementById('root')
);