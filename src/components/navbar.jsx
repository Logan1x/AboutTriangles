import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  function navToggle() {
    document.querySelector(".mobile-nav").classList.toggle("hidden");
  }

  return (
    <nav className="bg-purple-200 text-gray-700 shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <Link to="/" className="flex py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
                <span className="px-2 font-bold"> About Triangles </span>
              </Link>
            </div>

            {/* primary nav  */}
            <div className="hidden mx-2 md:flex items-center">
              <div>
                <Link
                  to="/calcarea"
                  className="mx-2 px-3 py-2 cursor-pointer rounded hover:shadow"
                >
                  Area
                </Link>
                <Link
                  to="/quiz"
                  className="mx-2 px-3 py-2 cursor-pointer rounded hover:shadow"
                >
                  Quiz
                </Link>
                <Link
                  to="/"
                  className="mx-2 px-3 py-2 cursor-pointer rounded hover:shadow"
                >
                  Angles
                </Link>
              </div>
            </div>
          </div>

          {/* secondary nav */}
          <div className="hidden mx-2 md:flex items-center">
            <div>
              <a
                href="https://github.com/Logan1x/AboutTriangles"
                className="px-3 py-2 border-0 bg-indigo-500 text-yellow-50 hover:bg-indigo-600 hover:shadow-md rounded hover:border-1 "
              >
                Github
              </a>
            </div>
          </div>

          {/* mobile button goes here */}

          <div className="md:hidden flex items-center">
            <button className="mobile-nav-btn" onClick={() => navToggle()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-nav hidden md:hidden">
        <Link to="/" className="block px-4 text-sm">
          <li className="list-none"> Home</li>
        </Link>

        <div>
          <Link to="/calcarea" className="block py-2 px-4 text-sm">
            <li className="list-none"> Area </li>
          </Link>
          <Link to="/quiz" className="block py-2 px-4 text-sm">
            <li className="list-none"> Quiz </li>
          </Link>
          <a
            href="https://github.com/Logan1x/AboutTriangles"
            className="px-4 py-2 text-sm"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
}
