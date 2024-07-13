import React from 'react'

const RecognitionCertificate = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
        <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
          <main className="w-full pt-4 md:flex-grow">
            <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
              <h1 className="text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Recognition Certificate</h1>
            </div>
            <div className="flex justify-center mt-4">
              <iframe 
                src="/School Registration.pdf" 
                width="80%" 
                height="600px" 
                title="Trust Certificate" 
                className="border-2 border-blue-500"
              >
              </iframe>
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}

export default RecognitionCertificate
