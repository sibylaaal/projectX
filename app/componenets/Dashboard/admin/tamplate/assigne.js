
'use client'

import { useEffect, useState } from "react";



export default function AssigneCategory(props){

    const [Categorie, setCategorie] = useState(null);

    const fetchCategories = () => {
      fetch('http://localhost:8081/api/admin/all_categories')
        .then((res) => res.json())
        .then((res) => setCategorie(res));
    }
    
  
    useEffect(() => {
      fetchCategories();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Use a callback function to ensure you have the updated state
        fetch(`http://localhost:8081/api/admin/assignCategory/${props.TemplateId}/${e.target.category.value}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res)
          .then((res) => {
            console.log(res);
            props.setAssigne(false)
            props.setAssigned(true)
            
            //props.added(true) //
          });
    
    
    
    
    
      
      };

   // ... (previous code)

return (
    <form onSubmit={(e) => handleSubmit(e)} className="Ani">
      <div className="flex justify-center mt-10">
        <div className="w-full bg-white p-5 m-3 rounded-xl">
          <span className="text-3xl font-bold text-mycolor py-5 mb-5">Assigne A category</span>
          <div className="flex flex-wrap -mx-3 mb-6 mt-10">
            {/* Other form elements */}
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-state">
                Categories
              </label>
              <div className="relative">
                <select
                  name="category"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-mycolor py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>none</option>
                  {Categorie &&
  Categorie.map((cate) => (
    <option key={cate.id} value={cate.id}>
      {cate.category}
    </option>
  ))}

                  
                </select>
              </div>
            </div>
          </div>
          <div className="flex space-between">
            <button
              onClick={() => props.setAssigne(false)}
              className={`block rounded-xl w-full bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`block w-full bg-mycolor rounded-xl mt-4 py-2 text-white font-semibold mb-2 m-2`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
  
}