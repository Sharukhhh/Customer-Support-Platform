import React from 'react'

const FormContainer = ({children}) => {
  return (
    <div className='bg-gradient-to-t from-[#b20a2c] to-[#fffbd5] flex items-center justify-center h-screen'>
        <div className='w-full max-w-xl'>
            {children}
        </div>
    </div>
  )
}

export default FormContainer