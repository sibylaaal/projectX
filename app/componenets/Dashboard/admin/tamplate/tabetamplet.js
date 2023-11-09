

'use client'
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SuccessAlert from '../../../successalert';
import LoadingCompo from '../../../home/loading';








export default function Tabeltamplate(props){

  
  const [data, setdata] = useState(null);
const [loading, setloading] = useState(true);




  const fetchTamplates = () => {
    fetch('http://localhost:8081/api/admin/all_templates')
      .then((res) => res.json())
      .then((res) =>{setdata(res) 
        setloading(false) } );
  }


  
  

  useEffect(() => {
    fetchTamplates();
  }, []);
  const deleteCategory = (id) => {
    fetch(`http://localhost:8081/api/admin/delete_template/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      })
      .then(() => {
        fetchTamplates();
        props.deleteds(true)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
   
  }; 
  
  
  useEffect(() => {
        setTimeout(() => {
          props.canceladded(false);
          props.deleteds(false)
          props.uodateds(false)
          props.setAssigned(false)
        }, 2000);
      }, [data]);
    return(
        <>
           <> 
           <div className='flex justify-between items-center'>
  <span className='text-5xl font-bold text-mycolor py-5 mb-5'>Templates</span>
  <button
    onClick={() => props.add(true)}
    className={`block w-10 bg-mycolor py-2 rounded-xl text-white font-semibold mb-2 m-2`}
  >
    +
  </button>
</div>

{props.added || props.updated || props.sdeleted || props.Assigned ? (
  <SuccessAlert
    message={
      props.sdeleted
        ? 'Your Category has been deleted'
        : props.updated
        ? 'Your Category has been updated'
        : props.Assigned
        ? 'Your Category has been assigned' // Add the message for Assigned
        : 'Your Category has been added' // Default message if none of the conditions match
    }
  />
) : null}


<div className="mt-5 w-90 overflow-x-auto">
  {loading ? (
    <LoadingCompo />
  ) : (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark-text-gray-400 bg-white">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">id</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Doc</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">name</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">prix</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Questions</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Categorie</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {data &&
            data.map((template, index) => (
              <tr key={template.id}>
                <td className="p-2 whitespace-nowrap">{index + 1}</td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 m-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{template.templateName}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">
                    {template.cost + 'Kr'}
                  </div>
                </td>
                <td
                  onClick={() => {
                    props.TemplateId(template.id);
                    props.questionss(true);
                  }}
                  className="p-2 whitespace-nowrap"
                >
                  <div className='text-center link'>Questions</div>
                </td>
                {console.log(template)}
                {
                  template.category?
                  (   <td


                    className="p-2 whitespace-nowrap"
                  >
                    <div className='text-center '>Assigne</div>
                  </td>):(     <td


onClick={() => {
  props.TemplateId(template.id);
  props.setAssigne(true);
}}
className="p-2 whitespace-nowrap"
>
<div className='text-center link'>Assigne</div>
</td>)
                }
           
                <td className="p-2 whitespace-nowrap">
                  <Menu as="div" className="">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover-bg-gray-50">
                        Options
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
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
                      <Menu.Items className="absolute right-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus-outline-none text-center">
                        <div className="py-1">
                          <Menu.Item className="hover2">
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-mycolor'
                                } block px-4 py-2 text-sm`}
                              >
                                <div onClick={() => deleteCategory(template.id)} className='flex align-center'>
                                  <p className='text-xxl font-semibold m-2'>Delete</p>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-mycolor'
                                } block px-4 py-2 text-sm`}
                              >
                                <div onClick={() => props.editid(template.id)} className='flex align-center'>
                                  <p data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='text-xxl font-semibold m-2' onClick={() => props.edit(true)}>Edit</p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 m-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                  </svg>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )}
</div>




          
          
         </>
        </>
    )
}