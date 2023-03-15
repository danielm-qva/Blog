import { Link } from "react-router-dom";
import {} from 'react-icons/all';
import {useDispatch, useSelector} from 'react-redux'
import {applogout} from "../redux/slice/sliceApp";
function Navbar() {

  const dispacht = useDispatch();
   const login = useSelector((store: any) => store.app.statusLogin)

  const handleLogout = () => {
    dispacht(applogout())
  }

  return (
<nav className="bg-transparent">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* <div className="flex flex-shrink-0 items-center">
          <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div> */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to={'/home'} className="text-black hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"> Home</Link>
              {
                   login ? (<Link to={'/mypost'} className="text-black hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Post</Link>) : (<></>)
              }
            
             <Link to={'/aa'} className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>

            <Link to={'.aa'} className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</Link>
          </div> 
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {
            login ? ( <button type="button" className="rounded-full  p-1 text-black animate-bounce focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>) : (<></>)
        }

        {
          !login ? (  <Link to={'/login'}>
            <button type="button" className="text-black hover:bg-slate-700 hover:text-white px-2 py-2 font-medium text-sm rounded-md">
              Login
            </button>
          </Link>) : (
            <button type="button" onClick={handleLogout} className="text-black hover:bg-slate-700 hover:text-white px-2 py-2 font-medium text-sm rounded-md">
              Logout
            </button>
          )
        }

      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
