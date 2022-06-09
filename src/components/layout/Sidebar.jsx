import { Link, useNavigate } from 'react-router-dom'
import './styles.css'

const Sidebar = ({activeRoute='votes'}) => {
  const navigate = useNavigate();
  const activeRouteStyle = {
    backgroundColor: 'rgba(192, 192, 192, 0.284)',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  return (
    <div className="sidebar-container">
      <div>
        <h1>Vote App</h1>
      </div>

      <div className="nav-menu" style={{marginTop: '10em'}}>
        <ul>
          <li style={activeRoute === 'votes' ? activeRouteStyle : {cursor:'pointer'}} onClick={() => navigate('/votes')}>Votes</li>

          <li style={activeRoute === 'upload-candidacy' ? activeRouteStyle : {cursor:'pointer'}} onClick={() => navigate('/upload-candidacy')}>Upload candidacy</li>

          <li style={activeRoute === 'my-votes' ? activeRouteStyle : {cursor:'pointer'}} onClick={() => navigate('/my-votes')}>My Votes</li>
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
