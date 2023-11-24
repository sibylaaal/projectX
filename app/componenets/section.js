'use client'
import Image from 'next/image'


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Section() {
  


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
      <span className="text-white">Legal Desks automatiske formularer er udarbejdet af advokater og sætter dig i stand til nemt og billigt at lave dine egne juridiske dokumenter.</span> =
    </h2>
   




    <div class="flex w-full mt-5  rounded bg-white" x-data="{ search: '' }">
        <input type="search" class="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none" placeholder="search" x-model="search" />
        <button class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-indigo-600" >search</button>
    </div>






</div>




    </div>



 </>
  )
}
