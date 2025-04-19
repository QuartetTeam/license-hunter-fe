import LicenseHunterView from './View/licenseHunterView.tsx';
import SocialLoginView from './View/SocialLoginView.tsx';
import './style/loginContainer.scss';

const LoginContainer = () => {
  return (
    <div className="login-container">
      <div className="login-view">
        <LicenseHunterView />
        <SocialLoginView />
      </div>
    </div>
  );
};

export default LoginContainer;
