

'use client '

import { useState } from "react";




export default function Edit(props){



  const [category, setCategory] = useState(''); // Initialize with an empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8081/api/admin/update_category/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify({ category: e.target.category.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.close(false)
        props.edited(true)
        // You can update the 'category' state here if needed.
      });
  };




    return(
        <>
   <form  onSubmit={(e)=>handleSubmit(e)} className="Ani">      
          <div className='flex justify-center '>
          <div className="w-full bg-white p-5 m-3  rounded-xl">        <span  className='text-3xl font-bold text-mycolor py-5 mb-5 py-5'>Edit Categorie</span>

      <div className="flex flex-wrap -mx-3 mb-6 mt-10">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" for="grid-first-name">
            category
          </label>
          <input defaultValue={props.curent} onChange={(e) => setCategory(e.target.value)}  className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="category" type="text" placeholder="Jane"/>
        </div>
     
      </div>
    
      <div className="flex flex-wrap -mx-3 mb-2">
     
   
     
      </div>
    
      <div className='flex space-between'>
    <>
    <button   onClick={()=>props.close(false)}          className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >cancel</button>
    <button      type="submit"       className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >save</button>
    </> 
    
      </div>
    </div></div></form> 
        </>
    )
}