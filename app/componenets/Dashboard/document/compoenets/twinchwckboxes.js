'use client'

import { useState } from "react";



export default function TwinBoxesCheck(props){

  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleCheckboxChange = (index,e) => {
    setCheckedIndex(index);
    props.functionn(e);
  };


return(
    <> <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
        <p className="text-3xl font-semibold text-gray-700 m-5"> {props.question} </p>
        <p className="text-xxl text-gray-600 ml-5"> {props.description}</p>
        <div class="flex items-center m-5 p-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium"> details!</span> {props.descriptionDetails}
  </div>
</div>



</label> 
{props.choices.map((check, index) => (
        <div key={index} className="flex items-center p-3">
          <input
            type="checkbox"
            value={check.choice}
            checked={index === checkedIndex}
            onChange={(e) => handleCheckboxChange(index,e)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="ml-2 text-xxl font-medium text-gray-900 dark:text-gray-300"
          >
            {check.choice}
          </label>
        </div>
      ))}
  
  </>
)



}