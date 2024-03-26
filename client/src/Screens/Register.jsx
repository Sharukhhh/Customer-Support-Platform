import React, { useEffect, useState } from 'react'
import FormContainer from '../Components/containers/FormContainer'
import Input from '../Components/fields/Input'
import {Link, useNavigate} from 'react-router-dom'
import { register } from '../axios/apiCalls'
import {Toaster, toast} from 'react-hot-toast'


const Register = () => {

  const [formData , setFormData] = useState({username: '' , email : '', password : ''})
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      toast.success(response.data.message);
      navigate('/login');

    } catch (error) {
      toast.error(error.response.data.error || error?.message);
    }

  }

  return (
    <>
    <FormContainer>
      <div className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl mb-4 text-center'>Create An Account</h2>

        <form onSubmit={handleSubmit}>
          <Input 
          label={'Name'} 
          type={'text'} 
          name={'username'} 
          value={formData.username}
          onChange={handleInputChange}
          placeholder={'Enter Your Name'}
          required
          />

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
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>

        </form>

        <div className='text-center mt-2'>
          <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
      </div>
    </FormContainer>
    </>
  )
}

export default Register