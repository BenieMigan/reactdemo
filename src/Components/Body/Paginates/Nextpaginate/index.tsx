import React from "react";
import "./style.css";
import "./tailwind.css";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

interface MainProps {
 
  mytitle1: string;
  title1: string;
  description1: string;
  mytitle2: string;
  title2: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  description2: string;
  
}

  const Nextpaginate: React.FC<MainProps> = ({mytitle1,title1,image4,description1,
                                      mytitle2,title2,image2,image3,description2,image5,image6,image7,image8,image9}) => {
  
  return (
    
    <div className="navbar-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img
              src={"https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png"}
              alt=""
            />
          </a>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#living-room">Living Room</a></li>
          <li><a href="#kitchen">Kitchen</a></li>
          <li><a href="#outdoors">Outdoors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <header className="main-header">
        <h1>Coming Home Never <br /> Felt So Good!</h1>
        <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <button className="main-button">Find Your Style</button>
      </header>

    
<div className="flex flex-col md:flex-row w-full h-auto">
  {/* div generale */}


{/* div gauche */}
<div className="w-full md:w-2/3 bg-gray-100">

<div className="bg-gray-100">
  
  {/* Main content */}
  <main className="bg-gray-100 p-4 md:p-10">
  <div className="mt-6 md:flex md:space-x-6">
      <div className="relative flex flex-col max-w-full md:max-w-[20rem] rounded-xl bg-gray-100 text-gray-700 shadow-md">
        <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {mytitle1}
        </h4>
        <p className="text-red-600 mt-2">{title1}</p>
        <img src={image5} alt="" className="w-full h-auto mt-2" />
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
        <img src={image6} alt="" className="w-full h-auto mt-2" />
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
    <div className="mt-6 md:flex md:space-x-6">
      <div className="relative flex flex-col max-w-full md:max-w-[20rem] rounded-xl bg-gray-100 text-gray-700 shadow-md">
        <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {mytitle1}
        </h4>
        <p className="text-red-600 mt-2">{title1}</p>
        <img src={image7} alt="" className="w-full h-auto mt-2" />
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
        <img src={image8} alt="" className="w-full h-auto mt-2" />
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

      <div className="relative flex flex-col max-w-full md:max-w-[20rem] rounded-xl bg-gray-100 text-gray-700 shadow-md">
        <h4 className="block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {mytitle1}
        </h4>
        <p className="text-red-600 mt-2">{title1}</p>
        <img src={image9} alt="" className="w-full h-auto mt-2" />
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

   {/* Pagination */}
    <div className="mt-6">
      <div className="flex-wrap justify-between space-x-4 md:space-x-8 lg:space-x-96">
               {/* Pagination Previous */}
      <Link to="/" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-xs md:text-sm ring-1 ring-inset ring-red-300 hover:bg-red-500 hover:text-white  transition-colors cursor-pointer">
      {/* Changer de Next à Previous */}
      Previous
      {/* Inverser l'icône */}
      <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M11.78 14.78a.75.75 0 0 1-1.06 0L6.47 10.53a.75.75 0 0 1 0-1.06L10.72 5.22a.75.75 0 1 1 1.06 1.06L8.06 10l3.72 3.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
      </svg>
      </Link>

      <nav className="isolate inline-flex rounded-md shadow-sm" aria-label="Pagination">
          <Link to="/" aria-current="page" className="relative z-10 inline-flex items-center px-2 py-2 hover:bg-red-500 hover:text-white transition-colors cursor-pointer">1</Link>
          <a href="#" className="relative z-10 inline-flex items-center bg-red-600  px-2 py-2 hover:bg-red-500 hover:text-white  transition-colors cursor-pointer">2</a>  
          <Link to="/Paginate3" className="relative z-10 inline-flex items-center px-2 py-2 hover:bg-red-500 hover:text-white  transition-colors cursor-pointer">3</Link>

         {/* Pagination Next */}
         <div className="px-6">
         <Link to="/Paginate3" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-xs md:text-sm ring-1 ring-inset ring-red-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
        Next
        <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
        </Link> 
        </div>


        </nav>

       

        
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
    <div className="relative border-4 border-inherit  flex flex-col w-full h-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="py-4 bg-gray-100">
        <div className="flex items-center bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md  border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
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
        <br /><b className="ml-5 ">Recent Posts</b>
        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image3} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />

        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image4} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image2} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
            <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image3} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
            <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image2} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        
      </div>
    </div>
        
  </div>
</div>
{/* Deuxième élément */}
  <div className="p-4 bg-gray-100 border-4  ">
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

<div className='Footer'>
        <div className='Footer-1'>
            <div className='Footer-a'>
                <h1>ABOUT</h1>
                <p>Nulla quis lorem ut libero malesuada feugiat. <br /> Praesent sapien massa, convallis a pellentesque nec, <br /> egestas non nisi. Pellentesque in ipsum id orci porta <br /> dapibus. Sed porttitor lectus nibh.</p>
            </div>
            <div className='Footer-b'>
                <h1>SOCIAL</h1>
                <div>
                    <a href=""><i className='bx bxl-facebook-square'></i></a>
                    <a href=""><i className='bx bxl-twitter'></i></a>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                    <a href=""><i className='bx bxl-pinterest'></i></a>
                </div>
            </div>
            <div className='Footer-c'>
                <h1>CONTACT US</h1>
                <p>500 Terry Francois St. <br />
                    San Francisco,<br />
                    CA 94158<br />
                    +1-410-555-0134 |<br />
                    info@example.com<br />
                    contact@example.com
                </p>
            </div>
        </div>
        <hr />
        <div className='Footer-2'>
            <div className='Footer-d'>
                <p>Copyright ©  Home Decor | Powered by Home Decor</p>
            </div>
            <div className='Footer-e'>
                <ul>
                    <li><Link to ="/aboutus">About Us</Link></li>
                    <li><Link to ="/livingroom">Living Room</Link></li>
                    <li><Link to ="/kitchen">Kitchen</Link></li>
                    <li><Link to ="/outdoors">Outdoors</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>

</div>


  );
}

export default Nextpaginate;