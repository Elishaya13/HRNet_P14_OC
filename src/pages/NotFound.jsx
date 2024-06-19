import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='mb-8'>The page you are looking for does not exist.</p>
      <Link
        to='/'
        className='px-4 py-2 bg-customGreen text-white rounded hover:bg-blue-700'
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
