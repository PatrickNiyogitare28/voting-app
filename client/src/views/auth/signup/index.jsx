import 'react'
import { Link } from 'react-router-dom'
import '../../../styles/common.css'


const SignUp = () => {
  return (
    <div className="container">
      <div className='form-container'>
        <form>
          <h1>Sign up </h1>
          <input placeholder="Full name" />
          <input placeholder="email" />
          <input placeholder="password" />
          <button>Signup</button>

          <Link to='/'>
              <p style={{marginTop: '2em'}}>Have account ? <span>Login</span></p>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default SignUp
