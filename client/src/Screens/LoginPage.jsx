import React , {useEffect, useState} from 'react'
import FormContainer from '../Components/containers/FormContainer'
import Input from '../Components/fields/Input'
import {Link , useNavigate} from 'react-router-dom'
import { login } from '../axios/apiCalls'
import {toast} from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../Redux/slices/authSlice'

const LoginPage = () => {

  const [formData , setFormData] = useState({ email : '', password : ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.login.user);

  useEffect(() => {
    if(loggedUser) {
      navigate('/home');
    }
  }, [loggedUser]);


  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      toast.success(response.data.message);
      dispatch(setData(response.data.user));
      navigate('/login');
    } catch (error) {
      toast.error(error.response.data.error || error?.message);
    }

  }

  return (
    <FormContainer>
      <div className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl mb-4 text-center'>Sign in to your Account</h2>

        <form onSubmit={handleSubmit}>
          <Input 
          label={'Email'} 
          type={'email'} 
          name={'email'} 
          value={formData.email}
          onChange={handleInputChange}
          placeholder={'Enter Your Email'}
          required
          />
          <Input 
          label={'Password'} 
          type={'password'} 
          name={'password'} 
          value={formData.password}
          onChange={handleInputChange}
          placeholder={'Enter Password'}
          required
          />

        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
        </form>

        <div className='text-center mt-3'>
          <p>New User? <Link to="/" className="text-blue-500">Sign up</Link></p>
        </div>
      </div>
    </FormContainer>
  )
}

export default LoginPage