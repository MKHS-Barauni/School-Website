import React from 'react';

const CenteredBlockPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex justify-center my-8 lg:my-14">
        <img className="object-cover object-center" alt="hero" src="/soon.webp" />
      </div>
    </div>
  );
};

export default CenteredBlockPage;
