import React from 'react';
import './Tab4.scss';

const Tab4: React.FC = () => (
  <div className='Tab4' data-testid='Tab4'>
    <div className='text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center'>
      <div className='border border-gray-100 rounded-xl shadow-2xl p-8 bg-gradient-to-r from-green-400 via-blue-900 to-blue-400 text-white max-w-lg'>
        <h1 className='text-2xl font-bold'>
          Using TailwindCSS in Ionic with React
        </h1>
        <p className='mt-4'>
          This is an example of how you can use 
          <span className='font-bold'>TailwindCSS</span> in an 
          <span className='font-bold'>Ionic</span> application using 
          <span className='font-bold'>React</span> framework.
        </p>
      </div>
    </div>
  </div>
);

export default Tab4;
