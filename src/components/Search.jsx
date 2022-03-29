import React, {useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

import {useResultContext} from '../contexts/ResultContextProvider';
import {Links} from './Links'

export const Search = () => {
  const [text,setText]=useState('Naruto');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text,2000);

  useEffect(() =>{
     if(debouncedValue) setSearchTerm(debouncedValue)
  },[debouncedValue])

  return (
    <div className="relative sm:ml-48  md:ml-64 sm:-mt-10 mt-3">
      <input value={text} type="text" className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-4 text-black hover:shadow-lg"
      placeholder="Search SearchIt or type URL"
      onChange={(e)=> setText(e.target.value)}
      />
      {text && (
        <button className="absolute mr-1 mt-0.5 right-4 text-2xl text-gray-500" type='button' onClick={()=> setText('')}>
        x
        </button>
      )}
      <Links />

    </div>
  )
}
