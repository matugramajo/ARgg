import React from 'react';
import { Arg } from './logos';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#131313] border-gray-700">
      <div className="flex flex-wrap items-center justify-between mx-10 py-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/Logo-ARgg.png" className="h-16" alt="Logo ARgg" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex font-medium p-4 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
            <li>
                <a href="#" className="block py-2 px-3 rounded text-white hover:text-blue-500 text-xl">Partidos</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 rounded text-white hover:text-blue-500 text-xl">Torneos</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 rounded text-white hover:text-blue-500 text-xl">Equipos</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 rounded text-white hover:text-blue-500 text-xl">Foros</a>
            </li>
            <li>
                <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full md:w-auto rounded border-2 border-[#949ba3] p-1 text-white hover:text-blue-500 bg-[#494949]"
                >
                <Arg />
                <a className='ms-2.5'>Español</a>
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;