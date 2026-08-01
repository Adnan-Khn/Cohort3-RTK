import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.js'
import { AppRoutes } from './routes/AppRoutes.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <ToastContainer/>
    <AppRoutes />
  </Provider>,
)
