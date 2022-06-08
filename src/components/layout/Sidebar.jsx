import { Link } from 'react-router-dom'
import './styles.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <h1>Vote App</h1>
      </div>

      <div className="nav-menu" style={{marginTop: '10em'}}>
        <ul>
          <li>Votes</li>

          <li>Upload candidacy</li>

          <li>My Votes</li>
        </ul>
      </div>

      <div className="nav-menu" style={{marginTop: '10em'}}>
        <ul>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
