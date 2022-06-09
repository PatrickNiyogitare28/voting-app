import 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../../styles/common.css'
import { useEffect } from 'react';

const Login = () => {
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

  const handleSubmit = (e) => {  
    e.preventDefault();
    if (Object.values(touched).every(e => e === '')) { 
      alert('Please fill in all fields');
  }
}




  return (
    <div className="container">
      <div className='form-container'>
        <form >
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
            disabled={!isValid}
            style={!isValid ? { backgroundColor: '#ccc' } : {}}
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
