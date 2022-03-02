import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactPlayer } from 'react-player';

import { Loading } from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';


export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search/q=JavaScript mastery&num=40')
  }, []);


  if (isLoading) return <Loading />;

  // console.log(location.pathname);

  switch (location.pathname) {

    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title , description}, index) => (
            <div key={index} className="md:2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-lg  dark:text-gray-300 text-gray-600">
                  {description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';


    default:
      return 'ERROR!';
  }
}