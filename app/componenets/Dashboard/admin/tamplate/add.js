'use client'
import { useEffect, useState } from "react";
import Questions from "./questions";


export default function AddTemplate(props) {

  
  /**const [Categories, setCategories] = useState(null)

  const fetchCategories = () => {
    fetch('http://localhost:8081/api/admin/all_categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  };

  useEffect(() => {
    fetchCategories();
  }, []);
;**/


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Use a callback function to ensure you have the updated state
    fetch('http://localhost:8081/api/admin/create_template', {
      method: 'POST',
      body: JSON.stringify({ templateName:e.target.name.value
        ,templateDescription:e.target.description.value
        ,cost:e.target.prix.value,
       }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.add(false)
        
        props.added(true) //
        // You can update the 'category' state here if needed.
      });





  
    // Now you can access the updated state
  };
  

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="Ani">
        <div className="flex justify-center mt-10 ">
          <div className="w-full bg-white p-5 m-3 rounded-xl">
            <span className="text-3xl font-bold text-mycolor py-5 mb-5">Add Template</span>
            <div className="flex flex-wrap -mx-3 mb-6 mt-10">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input
                  name="name"
                  className="appearance-none block w-full bg-gray-200 text-mycolor border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Hr Template"
                />
              </div>
           
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Cost
                </label>
                <input
                  name="prix"
                  className="appearance-none block w-full bg-gray-200 text-mycolor border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="Cost"
                />
              </div>
            </div>
            <div className="w-full mb-5  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
                  description
                </label>
               
       
<textarea id="message" name="description" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              
              </div>
            <div className="flex flex-wrap -mx-3 mb-2">
               {/** <div className="w-full px-3 mb-6 md:mb-0">
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
                    {Categories &&
                      Categories.map((cate) => (
                        <option key={cate.category} value={cate.id}>
                          {cate.category}
                        </option>
                      ))}
                  </select>
                </div>
              </div>*/}
            </div>
            <div className="flex space-between">
              <>
                <button
                  onClick={() => props.add(false)}
                  className={`block rounded-xl w-full bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
                >
                  Cancel
                </button>
                <button
                  type="submit" // Fixed the typo here
                  className={`block w-full bg-mycolor rounded-xl mt-4 py-2 text-white font-semibold mb-2 m-2`}
                >
                  Save
                </button>
              </>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
