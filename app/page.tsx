import { FaHome, FaUser, FaCompass } from 'react-icons/fa';

export default function Home() {
  return (

    <div>
      <title>Twitter-Demo</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <nav className="fixed bottom-0 w-full bg-black text-white p-4 border-t-2 border-gray-700 lg:hidden z-50">
          {/* lg:hidden makes the navbar hidden on screens larger than lg (large) */}
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center">
                <FaHome className="mr-2" />
                Home
              </a>
              <a href="#" className="flex items-center">
                <FaUser className="mr-2" />
                Profile
              </a>
              <a href="#" className="flex items-center">
                <FaCompass className="mr-2" />
                Explore
              </a>
            </div>
          </div>
        </nav>

        <div className="w-1/5 text-white py-4 h-auto hidden md:block">

          {/*left menu*/}
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="currentColor">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </g>
          </svg>

          <nav className="mt-5 px-2 ">
            <a href="#" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300">
              <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
              </svg>
              Home
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
              Explore
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Profile
            </a>
          </nav>


        </div>

        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
          <hr className="border-gray-600" />
          {/* Middle create tweet */}
          <div className="flex flex-col sm:flex-row">
            <div className="m-2 w-10 py-1">
              <img className="inline-block h-10 w-10 rounded-full" src="https://img.freepik.com/premium-photo/abstract-yin-yang-symbol_752237-13653.jpg?w=740" alt="" />
            </div>
            <div className="flex-1 px-2 sm:pt-2 sm:mt-2">
              <textarea className="bg-transparent text-gray-400 font-medium text-lg w-full" rows={2} placeholder="What's happening?" defaultValue={""} />
            </div>
          </div>
          {/* Middle create tweet below icons */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-10" />
            <div className="flex-1 sm:w-full md:w-3/5 lg:w-2/5 xl:w-1/3 px-2">
              <div className="flex items-center">
                <div className="flex-1 text-center px-1 py-1 m-2">
                  <a href="#" className="mt-1 group flex items-center text-blue-400 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="mt-1 group flex items-center text-blue-400 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0110 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="mt-1 group flex items-center text-blue-400 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="mt-1 group flex items-center text-blue-400 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-2">
              <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full float-right">
                Tweet
              </button>
            </div>
          </div>


        </div>


        <div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img className="inline-block h-10 w-10 rounded-full" src="#" alt="" />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-white">
                  Prathamesh Sankhe

                </p>
              </div> 
            </div>
          </a>
        </div>
        <div className="pl-16">
          <p className="text-base width-auto font-medium text-white flex-shrink">
            Lorem ipsum dolor sit amet.

            Lorem ipsum dolor sit amet consectetur. <span className="text-blue-400">#tailwindcss</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam consequatur delectus ratione pariatur ab culpa.
            [07/100]

          </p>
          <div className="flex">
            <div className="w-full">
              <div className="flex items-center">
                <div className="flex-1 text-center">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img className="inline-block h-10 w-10 rounded-full" src="#" alt="" />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-white">
                  Prathamesh Sankhe

                </p>
              </div> 
            </div>
          </a>
        </div>
        <div className="pl-16">
          <p className="text-base width-auto font-medium text-white flex-shrink">
            Lorem ipsum dolor sit amet.

            Lorem ipsum dolor sit amet consectetur. <span className="text-blue-400">#tailwindcss</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam consequatur delectus ratione pariatur ab culpa.
            [07/100]

          </p>
          <div className="flex">
            <div className="w-full">
              <div className="flex items-center">
                <div className="flex-1 text-center">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </a>
                </div>
                <div className="flex-1 text-center py-2 m-2">
                  <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
      </div>
    </div>


  )
}
