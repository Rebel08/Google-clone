import React from 'react';
import {  Link } from 'react-router-dom';
import {Search } from './Search';
export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-slate-700 border-slate-200">
       <div className="flex justify-between items-center space-x-5 w-screen">
         <Link to="/" >
            <p className="text-2xl bg-blue-500 font-bold text-white py1-1 px-2 rounded dark:bg-slate-500 dark:text-slate-900">
              SearchIt 🔍
            </p>
          </Link>
          <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className="text-lg dark:bg-slate-500 dark:text-slate-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                 {darkTheme ? 'Light💡' : 'Dark🌙'}
          </button>

        </div> 
        <Search/>
    </div>
    
  )
}
