import React from 'react';
import { Provider } from 'react-redux'
import ReactRedux from './ReactRedux';
import configureStore from './configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import DevTools from './DevTools';

const store = configureStore();

let App = () =>
    <Provider store={store}>
        <div>
            <ReactRedux />
            <DevTools />
        </div>
    </Provider>;

export default App;