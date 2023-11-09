
'use client'

import { useState } from "react";






export default function  TextAria({functionn,question,description,descriptionDetails}){


    return(
        <>
        <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
<div className="text-2xl text-gray-800 font-bold m-5 ">{question}</div>
<div className="text-2xl text-gray-800 font-bold ml-5 ">{description}</div>
<div className="text-2xl text-gray-400 p-5 font-bold p-2">{descriptionDetails}</div>


</label><div className="w-full "    >
  



<textarea onChange={(e)=>functionn(e)} id="message" rows="8" cols={30} name="Textaria"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>




    </div></>
    )
}