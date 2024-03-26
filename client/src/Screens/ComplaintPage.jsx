import React , {useState}from 'react'
import Navbar from '../Components/navbar/Navbar'
import FormContainer from '../Components/containers/FormContainer'
import Input from '../Components/fields/Input'
import SelectField from '../Components/fields/SelectField'
import toast from 'react-hot-toast'
import { complaintFormSubmit } from '../axios/apiCalls'

const ComplaintPage = () => {

    const [formData , setFormData] = useState({title : '' , description : '' , category : '' , priority : ''});

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        if(formData.category === '' || formData.priority === ''){
            return toast.error('All fields are required');
        }

        try {
            const response = await complaintFormSubmit(formData);
            toast.success(response.data.message);

            setFormData({
                title : '',
                description : '',
                category : '',
                priority : ''
            })
            
        } catch (error) {
            toast.error(error.response.data.error || error?.message);
        }

        

    }

  return (
    <>
        <Navbar isUser={true}/>

        <FormContainer>
            <form onSubmit={formSubmit} className='bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <Input
                label={'Title'}
                type={'text'}
                name={'title'}
                value={formData.title}
                onChange={handleInputChange}
                placeholder={'Complaint title'}
                required
                />

                <div className='mb-4'>
                    <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
                    <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder='Describe about the issue'
                    style={{ resize: 'none' }} 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>

                <div className='mb-4 flex flex-wrap justify-center'>
                    <SelectField 
                    label={'Select Category'} 
                    isCategory={true}
                    name={'category'}
                    value={formData.category}
                    onChange={handleInputChange}
                    />
                    <SelectField 
                    label={'Select Priority'} 
                    isCategory={false}
                    name={'priority'}
                    value={formData.priority}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </FormContainer>
    </>
  )
}

export default ComplaintPage