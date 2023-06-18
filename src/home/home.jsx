import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';


const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim() === "") {
      alert("Please enter a valid room code.");
    } else {
      setTimeout(() => {
        navigate(`/room/${value}`);
        window.location.reload(); // Refresh the page
      }, 100); // Delay for 1 second (adjust as needed)
    }
  }, [navigate, value]);

  return (

    <body id="body" className="bg-gray-900" data-theme="luxury">
    <div className="flex min-h-screen items-center justify-center">
      <div id="container" className="min-h-1/2 bg-gray-100">
        <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
          <svg
            id="googleicon"
            className="w-12 h-12 mr-2 -ml-0"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
      <br />

      

          <h1 className="text-white text-2xl">Video Call Application</h1>


          <input
      data-theme="luxury"
      type="text"
      placeholder="Type Room Code..!!"
      className="input input-bordered input-secondary w-full max-w-xs"
      value={value}
      onChange={(e) => setValue(e.target.value)}

    />
          <button
             onClick={handleJoinRoom}
            type="button"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>

 &nbsp;&nbsp;&nbsp;
            Create Room
          </button>

          <p>
            developer Gokul Raj K V?{' '}
            <a
              className="font-semibold text-sky-400"
              href="https://gokul-portfolio-ji23.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
            >
             &nbsp;&nbsp; Details
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  </body>


  );
};

export default HomePage;
