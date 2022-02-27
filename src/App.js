import React,{useState} from 'react';


import {Navbar} from './components/Navbar';
import {Routes} from './components/Routes';
import {Footer} from './components/Footer';

const App = () => {
    const [darkTheme,setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    </div>
  )
}

export default App;