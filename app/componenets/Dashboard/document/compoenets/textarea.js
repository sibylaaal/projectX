
'use client'

import { useState } from "react";






export default function  TextAria({functionn,question,description,descriptionDetails,value}){


    return(
        <>
        <div>

       
        <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
        <p className="text-3xl font-semibold text-gray-700 mt-5 mb-2"> {question} </p>
        <p className="text-xxl text-gray-600 mb-2 "> {description}</p>
        <div class="flex items-center mb-2 text-sm px-2 py-5 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium"> details!</span> {descriptionDetails}
  </div>
</div>


</label><div className="w-full "    >
  



<textarea onChange={(e)=>functionn(e)} id="message" rows="8" cols={30} value={value} name="Textaria"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>




    </div> </div></>
    )
}