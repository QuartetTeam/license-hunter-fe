import AppRouter from './router.tsx';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@styles/index.scss';

const queryClient = new QueryClient();

function App() {

    return (
        <>
            <CookiesProvider>
                <QueryClientProvider client={queryClient}>
                    <AppRouter/>
                </QueryClientProvider>
            </CookiesProvider>
        </>
    );
}

export default App;
