import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.tsx';
import {
  CertContainer,
  CertSearchContainer,
  LoginContainer,
  MainPageContainer,
  MyCalendarContainer,
  MyPageContainer,
} from './pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainPageContainer />} />
          <Route path="/certificateDetail" element={<CertContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/myCalender" element={<MyCalendarContainer />} />
          <Route path="/certificateSearch" element={<CertSearchContainer />} />
          <Route path="/myPage" element={<MyPageContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
