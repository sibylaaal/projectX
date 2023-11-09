
'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import LoadingCompo from "../../home/loading";
import { useDispatch, useSelector } from "react-redux";
import { off } from "../../redux/actions/SidebarActions";









export default function DocumentComponent(){
    const [Documents, setDocuments] = useState({
 All:{
  isChosed:true
 } 
 ,
 journal:{
  isChosed:false
 } 
 ,
 Signed:{
  isChosed:false
 } 
 ,
 Trash:{
  isChosed:false
 } 


})
const [Download, setDownload] = useState(false)


const toggleCategory = (e) => {
  const categoryName = e.target.name;
  setDocuments((prevState) => {
    const updatedCategories = {};
    for (const key in prevState) {
      if (key === categoryName) {
        updatedCategories[key] = { isChosed: true };
      } else {
        updatedCategories[key] = { isChosed: false };
      }
    }
    return updatedCategories;
  });
};

const   isLoading=useSelector(state=>state.Side.Loading)
const dispatch=useDispatch()
useEffect(() => {
dispatch(off())
}, [])



              



    return(<>
{
	isLoading?
	(<LoadingCompo/>)
	:
	(
		<>
		{
  Download?
  (
  
  
  
  
  
  
  
  
  
  
  
<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
  <div className="w-full max-w-md p-4 opacity-90 bg-mycolor rounded-lg shadow-lg">
    <h1 className="text-center text-2xl font-semibold mb-4 text-white">File Drop and Upload</h1>
    <div className="bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
      <label for="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span className="text-gray-600">Drag and drop your files here</span>
        <span className="text-gray-500 text-sm">(or click to select)</span>
      </label>
      <input type="file" id="fileInput" className="hidden" multiple />
    </div>
    <div className="mt-6 text-center" id="fileList"></div>
    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      <button onClick={()=>setDownload(false)} data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-mycolor dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
    </div>
  </div>
</div>

  
  )
  :
  ('')
}




<div className="bg-white w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-gray-700 p-5">Document</h1>
          <p className="text-xxl font-semibold text-gray-500 pl-5 pb-5">
            Oversigt over dine dokumenter genereret på platformen
          </p>
        </div>

<div className="md:flex">
     <div className="m-3">
          {/* First button */}
          
          <button onClick={()=>setDownload(true)} className=" p-2 rounded-tl-lg rounded-br-md  w-full mt-6 mb-2 py-2 text-white font-semibold bg-mycolor hover:shadow-xl text-xxl duration-200 hover:bg-mycolor">
            Download
          </button>
        </div>
        
        <Link href={'tamplate'}>
       
        <div className="m-3">
          {/* Second button */}
          <button className=" p-2 rounded-tl-lg rounded-br-md  w-full mt-6 mb-2 py-2  font-semibold bg-white border border-gray-800  text-mycolor hover:shadow-xl text-xxl duration-200 hover:text-white hover:bg-mycolor">
            Create Document
          </button>
        </div> </Link>
</div>
       
      </div>





      <div className="flex align-center p-5  overflow-x-auto">
      <button 
      
      onClick={(e)=>toggleCategory(e)}
      name="All"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Documents.All.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>All(0)</button>
      <button 
            
            onClick={(e)=>toggleCategory(e)}
            name="journal"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Documents.journal.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>Journal(0)</button>
      <button 
      
            
      onClick={(e)=>toggleCategory(e)}
      name="Signed"
      
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Documents.Signed.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>Signed(0)</button>
      <button 
            
            onClick={(e)=>toggleCategory(e)}
      
         name="Trash"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Documents.Trash.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>Trash(0)</button>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
 

  

 

  <div className="relative mx-auto w-full m-3">
	<a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div className="shadow p-4 rounded-lg bg-white">
		<div className="flex justify-center relative rounded-lg overflow-hidden h-52">
		  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
			<div className="absolute inset-0 bg-black opacity-10"></div>
		  </div>

		  <div className="absolute flex justify-center align-center text-center bottom-10 mb-3">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

		  </div>

		  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-mycolor text-sm font-medium text-white select-none">
			Featured
		  </span>
		</div>

		
    <p className="text-gray-700 p-5">lorem ipsum anta Losi Kara AY lips</p>


		<div className="grid grid-cols-2 mt-8">
		  <div className="flex items-center">
			<div className="relative">
			  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
			  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
			</div>

			<p className="ml-2 text-gray-800 line-clamp-1">
			  John Doe
			</p>
		  </div>

		  <div className="flex justify-end">
			<p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span className="text-sm uppercase">
				$
			  </span>
			  <span className="text-lg">3,200</span>/m
			</p>
		  </div>
		</div>
	  </div>
	</a>
  </div>
  <div className="relative mx-auto w-full m-3">
	<a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div className="shadow p-4 rounded-lg bg-white">
		<div className="flex justify-center relative rounded-lg overflow-hidden h-52">
		  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
			<div className="absolute inset-0 bg-black opacity-10"></div>
		  </div>

		  <div className="absolute flex justify-center bottom-0 mb-3">
			
		  </div>

		  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-mycolor text-sm font-medium text-white select-none">
			Featured
		  </span>
		</div>

		
    <p className="text-gray-700 p-5">lorem ipsum anta Losi Kara AY lips</p>


		<div className="grid grid-cols-2 mt-8">
		  <div className="flex items-center">
			<div className="relative">
			  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
			  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
			</div>

			<p className="ml-2 text-gray-800 line-clamp-1">
			  John Doe
			</p>
		  </div>

		  <div className="flex justify-end">
			<p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span className="text-sm uppercase">
				$
			  </span>
			  <span className="text-lg">3,200</span>/m
			</p>
		  </div>
		</div>
	  </div>
	</a>
  </div>
  <div className="relative mx-auto w-full m-3">
	<a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
	  <div className="shadow p-4 rounded-lg bg-white">
		<div className="flex justify-center relative rounded-lg overflow-hidden h-52">
		  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
			<div className="absolute inset-0 bg-black opacity-10"></div>
		  </div>

		  <div className="absolute flex justify-center bottom-0 mb-3">
			
		  </div>

		  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-mycolor text-sm font-medium text-white select-none">
			Featured
		  </span>
		</div>

		
    <p className="text-gray-700 p-5">lorem ipsum anta Losi Kara AY lips</p>


		<div className="grid grid-cols-2 mt-8">
		  <div className="flex items-center">
			<div className="relative">
			  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
			  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
			</div>

			<p className="ml-2 text-gray-800 line-clamp-1">
			  John Doe
			</p>
		  </div>

		  <div className="flex justify-end">
			<p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span className="text-sm uppercase">
				$
			  </span>
			  <span className="text-lg">3,200</span>/m
			</p>
		  </div>
		</div>
	  </div>
	</a>
  </div>
  




</div>





    </div>
</>
	)
}

    
    </> 
    )
  
}