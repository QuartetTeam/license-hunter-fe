import QuartetView from './View/QuartetView.tsx';
import SocialLoginView from './View/SocialLoginView.tsx';
import './style/loginContainer.scss';

const LoginContainer = () => {
  return (
    <div className="login-container">
      <QuartetView />
      <SocialLoginView />
    </div>
  );
};

export default LoginContainer;
