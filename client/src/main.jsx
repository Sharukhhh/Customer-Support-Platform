import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {store , persist} from './Redux/store.jsx'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persist} loading={null}>
      <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
)
