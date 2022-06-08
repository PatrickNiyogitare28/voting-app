import Navbar from './NavBar'
import Sidebar from './Sidebar'
import './styles.css'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar-container">
        <Sidebar />
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

export default Layout
