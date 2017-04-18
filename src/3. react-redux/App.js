import React from 'react';
import { Provider } from 'react-redux'
import ReactRedux from './ReactRedux';
import configureStore from './configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

let App = () =>
    <Provider store={store}>
        <ReactRedux />
    </Provider>;

export default App;