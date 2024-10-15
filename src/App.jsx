import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
  // State to manage fetched images
  const [images, setImages] = useState([]);
  // State to manage loading
  const [loading, setLoading] = useState(false);
  // State to manage search term 
  const [term, setTerm] = useState('');

  // Fetch images from the Pixabay API whenever the search term changes
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo`);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error('Error fetching images', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [term]);

  return (
    <div className='container mx-auto px-4'>
      {/* Title */}
      <h1 className='text-4xl text-center mx-auto my-10'>Pixabay Image Gallery</h1>
      {/* Component for handling image search input */}
      <ImageSearch searchText={((text) => setTerm(text))} />
        {/* Show 'No Image Found' message if no images are found and loading is done */}
        {!loading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}
      {/* Show loading message when loading is true */}
      {loading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : (
        // Display images in a grid layout
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))
          }
        </div>
      )}
    </div>
  )
}

export default App