import React from 'react'

const SelectField = ({label , isCategory , value , onChange , name}) => {
    const handleSelectChange = (e) => {
        onChange(e); // Call the parent component's onChange function
    };
  return (
    <>
    <div className='mr-4'>
        <label htmlFor={label} className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
        <select 
        name={name}
        value={value}
        onChange={onChange}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="">
            <option value="">{label}</option>
            {isCategory ? (
                <>
                    <option value="technical issue">Technical issue</option>
                    <option value="faculty issue">Faculty issue</option>
                </>
            ) : (
                <>
                    <option value="low">low</option>
                    <option value="high">high</option>
                </>
            )}
        </select>
    </div>    
    </>
  )
}

export default SelectField