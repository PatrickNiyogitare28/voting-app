import { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../../styles/common.css'
import { login } from '../../../services/auth';

const Login = () => {
  const [requestError, setRequestError] = useState(false);
  const navigate = useNavigate();
  const errorInputStyle = {
    border: '1px solid red',
  }
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  const { handleChange, values, errors, touched, getFieldProps, isValid } = formik;

  const handleSubmit = async (e) => {  
    e.preventDefault();
    setRequestError(false);
    const response = await login(values);
    if(!response?.success) return setRequestError(response?.message || 'Something went wrong');
    toast.success("Login successful");
    localStorage.setItem('token', response?.data?.token);
    navigate('/votes');
}

  return (
    <div className="container">
      <Toaster />
      <div className='form-container'>
        <form >
          {requestError && <div className="error-message">{requestError}</div>}

          <h1>Login </h1>
          <input placeholder="email" 
           type={'email'}
           style={errors.email && touched.email ? errorInputStyle : {}}
           name='email' 
           {...getFieldProps('email')}
           />
          {touched.email && errors.email && <label>{errors.email}</label>}

          <input 
          placeholder="password"
          type={'password'}
          name='password'
          style={errors.password && touched.password ? errorInputStyle : {}}
           {...getFieldProps('password')}
          />
          {touched.password && errors.password && <label>{errors.password}</label>}


          <button
            type="submit"
            disabled={!isValid || Object.values(touched).every(e => e === '')}
            style={((!isValid) || (Object.values(touched).every(e => e === ''))) ? { backgroundColor: '#ccc' } : {}}
            onClick={handleSubmit}
          >LOGIN</button>
        </form>

        <Link to='/signup'>
              <p style={{marginTop: '2em'}}>Have no account ? <span>Register</span></p>
        </Link>
      </div>
    </div>
  )
}

export default Login
