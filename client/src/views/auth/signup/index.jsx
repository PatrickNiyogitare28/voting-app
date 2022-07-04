import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import '../../../styles/common.css'
import { register } from '../../../services/auth'


const SignUp = () => {
  const [requestError, setRequestError] = useState(false);
  const navigate = useNavigate();

  const errorInputStyle = {
    border: '1px solid red',
  }

  const initialValues = {
    name: '',
    email: '',
    password: '',
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const formik = useFormik({
    initialValues,
    validationSchema
  });
  const { values, errors, touched, isValid, getFieldProps } = formik;

  const handleSubmit = async (e) => {  
    e.preventDefault();
    setRequestError(false);
    const response = await register(values);
    if(!response?.success) return setRequestError(response?.message || 'Something went wrong');
    toast.success("Registered successful");
    localStorage.setItem('token', response?.data?.token);
    navigate('/');
}  

  return (
    <div className="container">
      <Toaster />
      <div className='form-container'>
        <form>
        {requestError && <div className="error-message">{requestError}</div>}
          <h1>Sign up </h1>
          <input placeholder="Full Name" 
           type={'name'}
           style={errors.name && touched.name ? errorInputStyle : {}}
           name='name' 
           {...getFieldProps('name')}
           />
          {touched.name && errors.name && <label>{errors.name}</label>}

          <input placeholder="Email" 
           type={'email'}
           style={errors.email && touched.email ? errorInputStyle : {}}
           name='email' 
           {...getFieldProps('email')}
           />
          {touched.email && errors.email && <label>{errors.email}</label>}


          <input placeholder="Create Password" 
           type={'password'}
           style={errors.password && touched.password ? errorInputStyle : {}}
           name='password' 
           {...getFieldProps('password')}
           />
          {touched.password && errors.password && <label>{errors.password}</label>}

          <button
            type="submit"
            disabled={!isValid || Object.values(touched).every(e => e === '')}
            style={((!isValid) || (Object.values(touched).every(e => e === ''))) ? { backgroundColor: '#ccc' } : {}}
            onClick={handleSubmit}
          >SIGN UP</button>

          <Link to='/'>
              <p style={{marginTop: '2em'}}>Have account ? <span>Login</span></p>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default SignUp
