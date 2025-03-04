import AppRouter from './router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@styles/index.scss';

const queryClient = new QueryClient();

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRouter/>
            </QueryClientProvider>
        </>
    );
}

export default App;
