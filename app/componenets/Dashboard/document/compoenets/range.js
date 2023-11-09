'use client'
import { useState } from "react"



export default function Rangeers(props){


    const [value, setValue] = useState(0);

    const handleFunction = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
        if (props.functionn) {
        props.functionn(e);
      }
    };
  
    return (
      <>
        <div>
          <label
            htmlFor="customRange1"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            {props.question}:{value}
          </label>
          <input
            onChange={handleFunction}
            type="range"
            min={props.min}
            max={props.max}
            value={value} // Set the value of the input to the state value
            className="transparent text-gray-700 h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
            id="customRange1"
          />
        </div>
      </>
    );
  };
      
    
