import React from 'react'

const ImageCard = ({image}) => {
    // Split the tags string into an array of individual tags
    const tags = image.tags.split(',');
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
        {/* Display the image */}
        <img src={image.webformatURL} className='w-full' />
        <div className="px-6 py-4">
            {/* Display user name */}
            <div className='font-bold text-teal-500 text-xl mb-2'>
                Image by {image.user}
            </div>
            {/* Display image views, downloads and likes */}
            <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
            </ul>
        </div>
        {/* Display each tag as a styled badge */}
        <div className='px-6 py-4'>
            {
                tags.map((tag , index) => (
                    <span
                    key={index}
                    className='inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold to-gray-700 mr-2'
                    >
                        #{tag}
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default ImageCard;