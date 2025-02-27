'use client';

import React from 'react';

interface CardProps {
  title: string;
  imageSrc?: string;
  buttonLink?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  imageSrc, 
  buttonLink = "#",
  buttonText = "繼續閱讀"
}) => {
  return (
    <div className="bg-white shadow-2xl overflow-hidden flex flex-col" style={{ width: '210px', height: '240px' }}>
      <div className="px-2 py-1.5 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="px-2 py-0.5 flex-grow">
        <div className="border border-gray-300 h-[170px]">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </div>
      </div>
      <div className="bg-[#3a5a5b] text-white text-center">
        <a 
          href={buttonLink}
          className="block w-full py-0.5 text-xs"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card; 