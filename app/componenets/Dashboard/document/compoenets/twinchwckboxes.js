'use client'

import { useEffect, useState } from "react";



export default function TwinBoxesCheck({choices,question,description,descriptionDetails,value,functionn}){

  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [Choices, setChoices] = useState([]);
  const Sorting = (choices) => {

    const newValue = choices.replace(/checkbox\//g, ''); // Remove "checkbox/" from the string
  
    const elements = newValue.split('/'); // Split the string into individual elements
  
    const objectsArray = [];
    const objectSize = 3; // Each object has 3 properties: id, choice, relatedText
  
    for (let i = 0; i < elements.length; i += objectSize) {
      // Check if there are enough elements to create an object
      if (i + objectSize <= elements.length) {
        const obj = {
          id: elements[i],
          choice: elements[i + 2],
          relatedText: elements[i + 1],
        };
        objectsArray.push(obj);
      }
    }
  
    // Output each object in a readable format
    objectsArray.forEach(obj => {
      console.log(obj); // Output individual objects
    });
  
    // Or, to display the entire array as a JSON string
setChoices(objectsArray)
  
    // setCheckChoices(objectsArray); // Assuming setCheckChoices is a function to handle the result
  };
  useEffect(() => {
 Sorting(choices)
  }, []);
  const handleCheckboxChange = (index,e) => {
    setCheckedIndex(index);
    functionn(e)
  };


return(
    <> <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
        <p className="text-3xl font-semibold text-gray-700 m-5"> {question} </p>
        <p className="text-xxl text-gray-600 ml-5"> {description}</p>
        <>{value}</>
        <div class="flex items-center m-5 p-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium"> details!</span> {descriptionDetails}
  </div>
</div>



</label> 
{Choices.map((check, index) => (
        <div key={index} className="flex items-center p-3">
          <input
          id={check.id}
            type="checkbox"
            value={check.relatedText}
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