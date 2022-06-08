import './App.css'
import Login from './views/auth/login'
import { 
  Routes,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUp from './views/auth/signup';
import Votes from './views/dashboard/votes';

function App() {
  return (
   <Router>
     <Routes>
       {/* auth routes */}
       <Route path="/" element={<Login />} />
       <Route path='/signup' element={<SignUp />} />

       {/* dashboard routes  */}
      <Route path='/votes' element={<Votes />} />
     </Routes>
   </Router>
  )
}

export default App
