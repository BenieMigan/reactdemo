import React from "react";
import "./style.css";
import "./tailwind.css";

interface MainProps {
  mytitle: string;
  title: string;
  image: string;
  description: string;
  mytitle1: string;
  title1: string;
  image1: string;
  description1: string;
  mytitle2: string;
  title2: string;
  image2: string;
  image3: string;
  image4: string;
  description2: string;
  
}

  const Body: React.FC<MainProps> = ({mytitle,title,image, description,mytitle1,title1,image1,image4,description1,
                                      mytitle2,title2,image2,image3,description2}) => {
  
  return (
<div className="flex flex-col md:flex-row w-full h-auto">
  {/* div generale */}


{/* div gauche */}
<div className="w-full md:w-2/3 bg-gray-100">

<div className="bg-gray-100">
  <div className="flex flex-col md:flex-row items-start bg-gray-100 px-4 md:px-10">
    <div className="relative flex flex-col max-w-full md:max-w-[48rem] rounded-xl bg-gray-100 text-gray-700 shadow-md p-4">
      <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {mytitle}
      </h4>
      <p className="text-red-600 mt-2 md:mt-3">{title}</p>
      
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img src={image} alt="ui/ux review check" className="w-full h-auto" />
      </div>

      <div className="p-4 md:p-6">
        <p className="mt-2 md:mt-3 block font-sans text-base md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <a className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <p className="text-red-600">Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>

  {/* Main content */}
  <main className="bg-gray-100 p-4 md:p-10">
    <div className="mt-6 md:flex md:space-x-6">
      <div className="relative flex flex-col max-w-full md:max-w-[20rem] rounded-xl bg-gray-100 text-gray-700 shadow-md">
        <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {mytitle1}
        </h4>
        <p className="text-red-600 mt-2">{title1}</p>
        <img src={image1} alt="" className="w-full h-auto mt-2" />
        <div className="px-4 md:px-6 mt-2">
          <p className="text-gray-700 mb-2">{description1}</p>
          <div className="flex justify-between mt-4">
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <p className="text-red-600">Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col max-w-full md:max-w-[20rem] rounded-xl bg-[#f3f2f3] text-gray-700 shadow-md mt-6 md:mt-0">
        <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {mytitle2}
        </h4>
        <p className="text-red-600 mt-2">{title2}</p>
        <img src={image2} alt="" className="w-full h-auto mt-2" />
        <div className="px-4 md:px-6 mt-2">
          <p className="text-gray-700 mb-2">{description2}</p>
          <div className="flex justify-between mt-4">
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <p className="text-red-600">Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

   {/* Pagination */}
    <div className="mt-6">
      <div className="flex-wrap justify-between space-x-4 md:space-x-8 lg:space-x-96">
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-red-600 px-2 py-2 text-xs md:text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-0 md:ml-20">1</a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 text-xs md:text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>  
          <a href="#" className="relative inline-flex items-center px-2 py-2 text-xs md:text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">3</a>
        </nav>

        {/* Pagination Next */}
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-xs md:text-sm text-red-400 ring-1 ring-inset ring-red-300 hover:bg-red-50 focus:z-20 focus:outline-offset-0">
        Next
        <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
        </a>
      </div>
    </div>

  </main>
</div>
</div>
{/* fin div gauche */}

  {/* Les elements flexé a droite*/}
  {/* div droite */}
<div className="flex-1 md:w-2/5 bg-gray-100">
        {/* Les éléments flexé à droite */}
<div className="flex justify-center items-center min-h-screen p-4 mt-0 bg-gray-100">
  <div className="max-w-full md:max-w-[720px] mx-auto bg-gray-100">
    <div className="relative flex flex-col w-full h-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="py-4 bg-gray-100">
        <div className="flex items-center bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
          />
          <svg
            className="h-8 w-8 text-black ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>

      {/* Premier élément flexé à droite */}
      <div className="bg-gray-100">
        <br /><b className="ml-5">Recent Posts</b>
        <div className="p-2">
          <div className="relative flex bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md w-full max-w-full md:max-w-[25rem] flex-row">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100 rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={image3} alt="card-image" className="object-cover w-full h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="relative flex bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md w-full max-w-full md:max-w-[25rem] flex-row">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100 rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={image4} alt="card-image" className="object-cover w-full h-auto"/>
            </div>
            <div className="p-6">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="relative flex bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md w-full max-w-full md:max-w-[25rem] flex-row">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100 rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={image2} alt="card-image" className="object-cover w-full h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="relative flex bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md w-full max-w-full md:max-w-[25rem] flex-row">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100 rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={image3} alt="card-image" className="object-cover w-full h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="relative flex bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md w-full max-w-full md:max-w-[25rem] flex-row">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100 rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img src={image3} alt="card-image" className="object-cover w-full h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Deuxième élément */}
  <div className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold text-gray-700 mb-4">Tags</h2>
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span>
       <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span>
      <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span>
  </div>
</div>

</div>
{/* fin generale */}
</div>

  );
}

export default Body;