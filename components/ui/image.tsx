import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}  // Clase de Tailwind CSS
    />
  );
};

export default Image;
