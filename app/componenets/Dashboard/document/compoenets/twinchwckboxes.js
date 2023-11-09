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
<div className="text-2xl text-gray-800 font-bold text-center">{props.question}</div>
<p className="text-gray-700">{props.description}</p>
<p className="text-gray-500">{props.descriptionDetails}</p>


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