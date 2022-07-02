import { useState, useEffect } from 'react';
import { getProfile } from '../../services/auth';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './styles.css'

const Layout = ({ children, activeRoute }) => {
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    checkAuth()
  },[children])

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    const response = await getProfile(token);
    if(response?.success) {
      setIsAuthorized(true);
      localStorage.setItem('user', JSON.stringify(response?.data));
    }
    else{
      setIsAuthorized(false);
    }
  }

  const LayoutData = () => {
    return (
    <div className="layout-container">
      <div className="sidebar-container">
        <Sidebar activeRoute={activeRoute} />
      </div>
      <div className="main-container">
        <div>
          <Navbar />
        </div>
        <div className="children-container">{children}</div>
      </div>
    </div>
    )
  }

  const PageNotFound = () => {
    return (
      <div className="page-not-found">
        <h1>Page Not Found</h1>
        </div>
    )
  }

  return (
   <>
   {isAuthorized ? <LayoutData/> : <PageNotFound />}
    </>
  ) 
}

export default Layout
