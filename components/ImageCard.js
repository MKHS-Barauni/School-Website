import React from 'react';

const ImageCard = ({ title, image1, image2, image3 }) => {
  return (
    <section className="flex flex-col items-center justify-center p-6 sm:p-8">
      {/* Title */}
      {title && (
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-black">{title}</h1>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full h-64 sm:h-80">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src={image1}
            alt="Image 1"
          />
        </div>
        <div className="w-full h-64 sm:h-80">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src={image2}
            alt="Image 2"
          />
        </div>
        <div className="w-full h-64 sm:h-80">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src={image3}
            alt="Image 3"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
