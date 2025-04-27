import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CheckIcon from '@icon/icon-check.svg?react';
import '../style/licenseHunterView.scss';

const LicenseHunterView = () => {
  const [index, setIndex] = useState(0);
  const animations = [
    'https://lottie.host/4596f1e3-d710-45f3-b068-7c5dcdd4041b/qVrfYfeACT.lottie',
    'https://lottie.host/9beaee11-35c4-47e5-9c19-c83c7b90700d/wyPgXi64HD.lottie',
    'https://lottie.host/f3d412ff-4985-4064-83d8-ea4332a127ab/I7aJ9I0oat.lottie',
  ];

  const DURATION_MS = 4000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % animations.length);
    }, DURATION_MS);

    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="login-card">
      <div className="login-card-banner">
        <div className="login-card-banner__title">자격증 메일링 서비스, 자격저격</div>
        <div className="login-card-banner__description">
          <CheckIcon />
          <div>심플한 자격증 정보 검색</div>
        </div>
        <div className="login-card-banner__description">
          <CheckIcon />
          <div>원하는 자격증, 메일로 바로 도착!</div>
        </div>
        <div className="login-card-banner__description">
          <CheckIcon />
          <div>일정은 캘린더에 깔끔하게 저장</div>
        </div>
      </div>
      <DotLottieReact
        className="login-card-animation"
        src={animations[index]}
        autoplay
        loop={false}
      />
    </div>
  );
};

export default LicenseHunterView;
