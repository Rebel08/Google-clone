import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactPlayer } from 'react-player';

import { Loading } from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';


export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm){
       if(location.pathname==='/videos'){
         getResults(`/search/q=${searchTerm} videos`);
       }
       else{
         getResults(`${location.pathname}/q=${searchTerm}&num=40`);
       }
    }
  }, [searchTerm, location.pathname]);


  if (isLoading) return <Loading />;

  // console.log(location.pathname);

  switch (location.pathname) {

    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 lg:w-8/12 sm:px-56">
          {results?.results?.map(({ link, title , description}, index) => (
            <div key={index} className="md:2/5 w-full ">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-md  dark:text-gray-300 text-gray-600">
                  {description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({image, link:{href,title}},index)=>(
            <a href={href} className="sm:p-2 p-5" key={index} target="_blank" rel="noreferrer">
              <div className="w-40 h-auto hover:shadow-xl">
              <img src={image?.src} alt={title} loading="lazy" className="object-contain h-40 w-40 rounded" />
              </div>
              <p className="w-36 break-words text-sm mt-1 hover:underline">
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';


    default:
      return 'ERROR!';
  }
}
