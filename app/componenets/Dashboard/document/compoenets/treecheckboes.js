'use client'

import { useState } from "react";




export default function  TreeCheckBooks(props){
    
    return(



        <>
        <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
<div className="text-2xl text-gray-800 font-bold">{props.question}</div>

</label>   <div className="w-full grixxx" >


<div className="inline-block radio">
       <input
         name="data3"
         type="radio"
         id="B1"
         hidden="hidden"
         value={props.value1}
         onChange={props.functionn}
       />
       <label
         htmlFor="B1"
         className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 mr-10"
       >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>


<p className="iconL"> {props.value1} </p>
       </label>
     </div>

     <div className="inline-block radio">
       <input
         name="data3"
         type="radio"
         id="D1"
         hidden="hidden"
         value={props.value2}
         onChange={props.functionn}
       />
       <label
         htmlFor="D1"
         className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
       >

<div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>



<p className="end">{props.value2} </p>

</div>



       </label>
     </div>







  


















     <div className="inline-block radio m">
       <input
         name="data3"
         type="radio"
         id="D3"
         hidden="hidden"
         value={props.value3}
         onChange={handleRadioChange}
       />
       <label
         htmlFor="D3"
         className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
       >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>









<p className="iconL">{props.value3} </p>                   </label>
     </div>
   </div>
    </>
    )
}