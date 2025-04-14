import { Outlet } from 'react-router-dom';
import './style/Container.scss';

const Container = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Container;
