import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from '@/components/ui/provider';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { system } from "./theme"

import { Provider as ReduxProvider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider>
        <App />
        </Provider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
