import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.tsx';
import { MainPageContainer, CertificateDetailContainer, LoginContainer } from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<MainPageContainer/>}/>
                    <Route path="/certificateDetail" element={<CertificateDetailContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
