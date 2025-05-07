import { Header, Container, Footer } from './pages';
import { useRefreshTokenInterceptor } from './common/utils/session';

const Home = () => {
  useRefreshTokenInterceptor();

  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default Home;
