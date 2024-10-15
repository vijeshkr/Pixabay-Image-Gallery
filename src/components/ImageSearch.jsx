import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
    // State to manage search input
    const [text, setText] = useState('');

    // Handle form submission
    const handleSubmission = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            {/* Form for inputting the search term */}
            <form onSubmit={handleSubmission} className='w-full max-w-sm'>
                <div className='flex items-center border-b-2 border-teal-500 py-2'>
                    {/* Input field */}
                    <input
                    className='bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                        onChange={e => setText(e.target.value)}
                        placeholder='Search Images'
                        type="text" />
                    {/* Submit button */}
                    <button
                    className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
                        type='submit'>
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch