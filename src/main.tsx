
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './i18n'; // Import i18n configuration
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

<Provider store={store}> {/* Wrap your app with the Provider */}
        <App />
    </Provider>
    </BrowserRouter>,

)
