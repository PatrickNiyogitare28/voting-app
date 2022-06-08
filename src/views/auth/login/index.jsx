import 'react'
import { Link } from 'react-router-dom'
import '../../../styles/common.css'

const Login = () => {
  return (
    <div className="container">
      <div className='form-container'>
        <form>
          <h1>Login </h1>
          <input placeholder="email" />
          <input placeholder="password" />
          <button>LOGIN</button>
        </form>

        <Link to='/signup'>
              <p style={{marginTop: '2em'}}>Have no account ? <span>Register</span></p>
          </Link>
      </div>
    </div>
  )
}

export default Login
