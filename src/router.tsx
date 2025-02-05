import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.tsx';
import MainPageContainer from './pages/MainPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<MainPageContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
