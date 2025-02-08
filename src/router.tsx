import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.tsx';
import { MainPageContainer, CertificateDetailContainer } from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<MainPageContainer/>}/>
                    <Route path="/certificateDetail" element={<CertificateDetailContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
