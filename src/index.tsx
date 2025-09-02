import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
