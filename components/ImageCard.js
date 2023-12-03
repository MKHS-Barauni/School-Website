import React from 'react';

const ImageCard = ({ title, image1, image2, image3 }) => {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex justify-center gap-4">
        <div className="w-100 h-80">
          <img className="object-cover w-full h-full rounded" src={image1} alt="Image 1" />
        </div>
        <div className="w-100 h-80">
          <img className="object-cover w-full h-full rounded" src={image2} alt="Image 2" />
        </div>
        <div className="w-100 h-80">
          <img className="object-cover w-full h-full rounded" src={image3} alt="Image 3" />
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
