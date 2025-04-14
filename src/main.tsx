import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Modal from 'react-modal';
import './index.scss';

async function msw() {
  if (import.meta.env.VITE_MSW === 'TRUE') {
    const worker = await import('./mock/handlers.ts');
    return worker.default.start({
      onUnhandledRequest: 'error',
    });
  }
  return Promise.resolve();
}

Modal.setAppElement('#root');
msw().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
