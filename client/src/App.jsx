import './App.css'
import Login from './views/auth/login'
import { 
  Routes,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUp from './views/auth/signup';
import Votes from './views/dashboard/votes';
import UploadCandidacy from './views/dashboard/upload-candidacy';
import MyVotes from './views/dashboard/my-votes';

function App() {
  return (
   <Router>
     <Routes>
       {/* auth routes */}
       <Route path="/" element={<Login />} />
       <Route path='/signup' element={<SignUp />} />

       {/* dashboard routes  */}
      <Route path='/votes' element={<Votes />} />
      <Route path='/upload-candidacy' element={<UploadCandidacy />} />
      <Route path='/my-votes' element={<MyVotes />} />
     </Routes>
   </Router>
  )
}

export default App
