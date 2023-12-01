'use client'
import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/actions/AuthActions';
import Link from 'next/link';


const navigation = [
  { name: "Home", href: "/", current: true,icon:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
  { name: "Templates", href: "#", current: false,icon:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { name: "Categories", href: "#", current: false,icon:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { name: "privacy", href: "/privacy", current: false,icon:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { name: "Conditions", href: "/conditions", current: false,icon:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },

];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {



  const [Templates, setTemplates] = useState(null);
  const [Categories, setCategories] = useState(null);

const [clikedname, setclikedname] = useState('');
  
  
  //////////////////////////// atleast(5)
  const fetchTamplates = () => {
    fetch('http://localhost:8081/api/suser/user_all_templates')
      .then((res) => res.json())
      .then((res) => setTemplates(res));
  }
  const fetchCategories = () => {
    fetch('http://localhost:8081/api/admin/all_categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }
useEffect(()=>{fetchTamplates(),fetchCategories()},[])
///////////////////////////////////

  const dispatch = useDispatch();
const [clicked, setclicked] = useState(false);
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


  const toggle = (name) => {

   name==='Categories'||'Templates' ? setclicked(!clicked):null
    
setclikedname(name)
  };
  

  return (
    <>

{
  !authStatus? (<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-2 sm:before:flex-1">
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
       
      </div>
    </div>):('')
}

    <Disclosure as="nav" className="xl:text-gray-700 p-2 sticky top-0 z-50 bg-white shadow-lg absolute inset-0 bg-white opacity-75  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 w-full sm:px-6 lg:px-8   ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="left-0 text-center flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center text-center">
                <div className="flex text-center flex-shrink-0 items-center">
               
                <div className="hidden text-center sm:ml-6 sm:block">
                  <div className="flex  text-center space-x-4">
                    {navigation.map((item) => (
                      <div  className='navhover border-b-2 m-3 flex  p-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    
                      <Link
                      onClick={()=>toggle(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                         "text-gray-800 text-3xxl text-center  "
                            
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link></div>
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
                    <div className="m-5 rounded-md flex text-white bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold shadow-sm focus:outline-visible focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      
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
      <>
      <span>Login</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>   
      </>
 
     }




                    </div>
                  </Link>
                  
              
                  
                  </>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 text-center px-2 pb-3 pt-2">
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
          {
            clicked?
            (          <div
  x-show="open"

  className="absolute left-60    hidden sm:block w-full md:max-w-screen-sm md:w-screen  mt-2 origin-top-right"
>
  <div className="px-2 pt-2 pb-4 bg-white  shadow-lg dark-mode:bg-gray-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

     
{
  clikedname==='Categories'?
  ( 
    
    Categories.map((el)=>(
  <a
    className="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    href="#"
  >
    <div className="bg-indigo-600 text-white rounded-lg p-3">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        className="md:h-6 md:w-6 h-4 w-4"
      >
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="font-semibold">{el.category}</p>
    </div>
  </a>

    ))
    
  
  
  )
  :
  (null)
}




{
  clikedname==='Templates'?
  ( 
    
    Templates.map((el)=>(
  <a
    className="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    href="#"
  >
    <div className="bg-indigo-600 text-white rounded-lg p-3">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        className="md:h-6 md:w-6 h-4 w-4"
      >
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="font-semibold">{el.templateName}</p>
    </div>
  </a>

    ))
    
  
  
  )
  :
  (null)
}
    
    
    </div>
  </div>
</div>
       )
            :
            (null)
          }
 </>
      )}
    </Disclosure>
  

    </>

  );
}
