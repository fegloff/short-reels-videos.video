import { Outlet } from "react-router-dom";

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Outlet />
    </div>
  )
  
}

export default Navigation;