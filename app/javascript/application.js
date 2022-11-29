// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/components/App';
import store from './src/redux/configureStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
     document.getElementById('root')
);
