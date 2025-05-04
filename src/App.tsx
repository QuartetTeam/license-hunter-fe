import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import accessTokenInterceptor from './common/utils/session.ts';
import AppRouter from './router.tsx';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  accessTokenInterceptor();
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} pauseOnHover />
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
