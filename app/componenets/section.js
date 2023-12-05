'use client'
import Image from 'next/image'


import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Section() {
  
  const [Templates, setTemplates] = useState(null);
  const fetchTamplates = () => {
    fetch('http://localhost:8081/api/suser/user_all_templates')
      .then((res) => res.json())
      .then((res) => setTemplates(res));
  }
  useEffect(()=>{fetchTamplates()},[])
  const [ontouche, setontouche] = useState(false);


  const handchangedata=(e)=>{
    if (e.target.value !== '') {
      setontouche(true)
      const inputValue = e.target.value.toLowerCase();
      const newdata = Templates.filter((data) => {
        const templateName = data.templateName.toLowerCase();
        const templateNameLength = templateName.length;
        const inputValueLength = inputValue.length;
    
        // Check if the templateName starts with the input value
        const startsWithInput = templateName.startsWith(inputValue);
    
        // Check if the templateName ends with the input value
        const endsWithInput = templateName.endsWith(inputValue);
    
        // Check if the input value appears in the middle of templateName
        const containsInput = templateName.includes(inputValue);
    
        return (startsWithInput && endsWithInput) || containsInput;
      });
    
      setTemplates(newdata);
    } else {
       fetchTamplates();
       setontouche(false)
    }
    
 

  }

  return (
 <>
<div
  className=" py-40 bg-opacity-50 bg-black flex items-center justify-center    boxshadow"
  style={{ backgroundImage: "url(./dk.jpeg)" ,backgroundPosition:"center",backgroundSize:"cover"}}
>
  <div className="mx-2 py-10 text-center">
    <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
     Vi gør jura nemt

    </h1>
    <h2 className="text-gray-200 font-extrabold py-5 text-4xxl xs:text-5xxl md:text-4xxl leading-tight">
      <span className="text-white">Docker automatiske formularer er udarbejdet af advokater og sætter dig i stand til nemt og billigt at lave dine egne juridiske dokumenter.</span> 
    </h2>
   




    <div class="flex w-full mt-5   bg-white " x-data="{ search: '' }">
        <input  onFocus={()=>setontouche(true)} onBlur={()=>setontouche(false)}  onChange={handchangedata} type="search" class="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none" placeholder="search" x-model="search" />
        <button class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-mycolor" >search</button>
    </div>

{
  ontouche?
  (
  Templates&& Templates.map((el)=>(
    <a  style={{ overflow: 'hidden', position:"absolute",width:"54.5%",marginTop:"-7x"}}
    className="flex flex row items-start dropsearch  p-2 bg-white dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    href="#"
  >
    <div className="bg-mycolor text-white rounded-lg p-3">
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
      <p className="font-semibold">{el.templateName} </p>
    </div>
  </a>


  ))
)
  :
  (null)
}

   



</div>




    </div>



 </>
  )
}
