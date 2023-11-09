'use client'

import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/actions/AuthActions";

import { Menu, Transition } from '@headlessui/react';
import React, { useState,Fragment, useEffect } from 'react';
import { Toggle } from "../redux/actions/SidebarActions";
import { useRouter } from "next/navigation";


export default function Header(){
    const dispatch = useDispatch();





const user = useSelector((state) => state.Auth.user);



 

  
  
    const authStatus = useSelector((state) => state.Auth.isLogged);
    const router = useRouter();
  
    useEffect(() => {
      if (!authStatus || user.authorities[0].authority=='' ||user.authorities[0].authority=="advisor"||user.authorities[0].authority=="user") {
        // Redirect unauthorized users to the login page
        router.push('/login');
      }
    }, [authStatus, router]);

    return(
        <>
        
        
           <header className="w-full">
          {/* Navbar */}
          <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  {/* Open sidebar button on mobile */}
                  <button
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden md:hidden lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={()=>dispatch(Toggle())}
                  >
                    <span className="sr-only">Open sidebar</span>
                   
                      {/* Mobile sidebar icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

                  </button>
</div>
                <div className="ml-auto flex items-center space-x-4">
                  {/* Profile section */}
                  <Menu as="div" className="relative">
  <div>
    <Menu.Button className="relative flex items-center text-sm text-gray-700 dark:text-gray-300">
      {/* Profile image */}
      
      <img
        className="h-8 w-8 rounded-full"
        src="/default-profile-account-unknown-icon-black-silhouette-free-vector.jpeg"
        alt="Default Profile"
      />
      {/* Profile name */}
    </Menu.Button>
  </div>
  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {/* Profile menu items */}
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={`${
              active ? 'bg-gray-100' : ''
            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200`}
          >
            Your Profile
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={`${
              active ? 'bg-gray-100' : ''
            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200`}
          >
            Settings
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            onClick={() => {
              
              localStorage.clear()
              dispatch(logout())}}
            href="#"
            className={`${
              active ? 'bg-gray-100' : ''
            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200`}
          >
            Sign out
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
  </Transition>
</Menu>

                </div>
              </div>
            </div>
          </nav>
        </header>
        </>
    )
}