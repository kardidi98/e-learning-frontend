import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import interceptors from "./components/InterceptorsComponent";





const store = ConfigureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
