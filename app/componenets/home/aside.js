'use client'

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"



export default function Aside(props) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.Side.isOpened);
  const user = useSelector((state) => state.Auth.user);

  const [path, setPath] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
    setPath(pathname);
  }, []);

  const userRole = user.authorities[0].authority;

  const navigationLinks = {
    SUSER: [
      { path: '/dashboard/user', label: 'Tamplates', clicked: true ,icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"},
      { path: '/dashboard/user/document', label: 'Documents', clicked: false, icon:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" },
   

    ],
    ADMIN: [
      { path: '/dashboard/admin', label: 'Dashboard', clicked: true,icon:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
      { path: '/dashboard/admin/tamplate', label: 'Template', clicked: false ,icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"},
      
      { path: '/dashboard/admin/categories', label: 'Category', clicked: false,icon:"M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" },


      { path: '/dashboard/admin/users', label: 'Users', clicked: false ,icon:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"},
      
    ],
    ADVISOR: [
      { path: '/dashboard/user', label: 'Advisor', clicked: false },
      { path: '/dashboard/user/counsellors', label: 'Counsellors', clicked: false },
      { path: '/dashboard/user/templates', label: 'Templates', clicked: false },
    ],
  };
  
  const filteredLinks = navigationLinks[userRole]; // Access the array by role key
  const [links, setLinks] = useState(filteredLinks);
  
  
  const handleLinkClick = (index) => {
    const updatedLinks = [...links];
    updatedLinks.forEach((link, i) => {
      if (i === index) {
        link.clicked = true;
      } else {
        link.clicked = false;
      }
    });
    setLinks(updatedLinks);
  
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-gray-200 bg-gray-50 dark:border-gray-700 transform ease-in-out duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative md:flex md:flex-shrink-0 md:w-64 md:shadow-xl`}
    >
      <div className="py-4 text-gray-500 m-2">
        <div className="p-10  mt-10 mb-10">    
        <img className="w-20 h-20 p-1 rounded-full ring-2  ring-gray-300 dark:ring-gray-500" src="/profile.jpeg"/>

   <div className="flex m-2">
    
     <h2 className="text-xl  font-semibold text-gray-600 dark: text-gray-400  text-font-bold ">
          {user.firstname}       

        </h2>  </div><p className="text-gray-400 "> {user.email} </p>
        </div>
        {links && (
          <ul className="space-y-5 items-center mt-5">
            <li>{''}</li>
            {links.map((link, index) => (

              <li
                className={`text-xl flex items-center  text-gray-500  font-bold m-5 ${link.clicked ? 'active' : ''}     ${link.clicked ? 'text-gray-700 ' : ''} `}
                key={index}
              >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
</svg>




          
                <div className="ml-2">
                  {link.clicked ? (
                    <span>{link.label}</span>
                  ) : (
                    <Link className="dark:text-white" onClick={() => handleLinkClick(index)} href={link.path}>
                      {link.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}