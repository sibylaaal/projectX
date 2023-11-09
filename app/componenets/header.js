'use client'
import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/actions/AuthActions';
import Link from 'next/link';


const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const [myUser, setMyUser] = useState({});
  const [loading, setloading] = useState(false)
  const [loading2, setloading2] = useState(false)

  // Use useSelector to access the Redux state
  const authStatus = useSelector((state) => state.Auth.isLogged);
  const user = useSelector((state) => state.Auth.user);

  // Use the authStatus directly, no need to store it in state
  useEffect(() => {
    setStatus(authStatus);
    setMyUser(user);
  }, [authStatus, user]);

  return (
    <>

{
  !authStatus? (<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Docura 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join And have Many Free Features
        </p>
    

        <Link onClick={()=>setloading2(true)} href="/register"> {/* Replace with your login route */}
                    <div className="flex-none rounded-full bg-indigo-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900
       ">
                      
     {
      loading2?
      (<div className="flex justify-center items-center ">
      <div
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    </div>)
      :
      <>register now<span aria-hidden="true">&rarr;</span></>
     }



                    </div>
                  </Link>

          
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>):('')
}

    <Disclosure as="nav" className="xl:text-gray-700 p-5 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img src="/logo3.svg" className='logo3 ' alt="" />
               
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                         "text-mycolor text-3xxl font-semibold"
                            
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div> </div>
              </div>
              <div className="absolute inset-y-0 z-10 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {status ? (
                  <>
                   
                    {myUser ? (
                      <>
                        <Menu as="div" className="relative ml-3 z-10">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              {myUser.picture=null ? (
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={myUser.picture}
                                  alt=""
                                />
                              ) : (
                                <img
                                className="h-8 w-8 rounded-full"
                                src="/default-profile-account-unknown-icon-black-silhouette-free-vector.jpeg" // Replace with the correct path to your image
                                alt="Default Profile"
                              />
                              
                              )}     
                                                 <p className="text-white m-2">{myUser.firstname}</p>

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
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#" // Replace with your profile route
                                    className={classNames(
                                      active ? 'bg-gray-100 text-mycolor' : '',
                                      'block px-4 py-2 text-sm text-gray-700 text-mycolor'
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#" // Replace with your settings route
                                    className={classNames(
                                      active ? 'bg-gray-100 text-mycolor' : '',
                                      'block px-4 py-2 text-sm text-gray-700 text-mycolor'
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                  onClick={() => dispatch(logout())}

                                    href="#" // Replace with your sign out route or action
                                    className={classNames(
                                      active ? 'bg-gray-100 text-mycolor' : '',
                                      'block px-4 py-2 text-sm text-mycolor'
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    ) : (
                      ''
                    )}
                  </>
                ) : (  <>   

                  <Link onClick={()=>setloading(true)} href="/login"> {/* Replace with your login route */}
                    <div className="m-5 rounded-md  text-white bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold shadow-sm focus:outline-visible focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      
     {
      loading?
      (<div className="flex justify-center items-center ">
      <div
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    </div>)
      :
      ('Login')
     }



                    </div>
                  </Link>
                  
              
                  
                  </>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                   
                    'block rounded-md px-3 py-2 text-mycolor   text-white font-semibold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <p className='text-xxl'>{item.name}</p>
                  
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>

  );
}
