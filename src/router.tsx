import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.tsx';
import {
    CertificateDetailContainer,
    CertificateSearchContainer,
    LoginContainer,
    MainPageContainer,
    MyCalendarContainer,
    MyPageContainer
} from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<MainPageContainer/>}/>
                    <Route path="/certificateDetail" element={<CertificateDetailContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/myCalender" element={<MyCalendarContainer/>}/>
                    <Route path="/certificateSearch" element={<CertificateSearchContainer/>}/>
                    <Route path="/myPage" element={<MyPageContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
