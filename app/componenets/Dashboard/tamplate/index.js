'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { off, on } from "../../redux/actions/SidebarActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingCompo from "../../home/loading";
import { useRouter } from "next/navigation";
import Skeleton from "../../skeleton";



export default function TamplateCompo(){
	const dispatch=useDispatch()
  const router=useRouter()  

	useEffect(() => {
		 dispatch(off())

	  }, []); 
    const [Tamplate, setTamplate] = useState({
        All:{
         isChosed:true
        } 
        ,
        HR:{
         isChosed:false
        } 
        ,
        Familly:{
         isChosed:false
        } 
        ,
        Personaldata:{
         isChosed:false
        } 
       
       
       })







        const createdoc = (id) => {
          fetch(`http://localhost:8081/api/suser/createDocument/${id}`,{
            method:"POST"
          })
            .then((res) => res.json())
            .then((res) =>res);
        }
   
        
       
const toggleCategory = (e) => {
    const categoryName = e.target.name;
    setTamplate((prevState) => {
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
  useEffect(() => {
  dispatch(off())
  }, [])


  const [data, setdata] = useState([]);

  const fetchTamplates = () => {
    fetch('http://localhost:8081/api/suser/user_all_templates')
      .then((res) => res.json())
      .then((res) => setdata(res));
  }
  const handchangedata=(e)=>{
    if (e.target.value !== '') {
      const inputValue = e.target.value.toLowerCase();
      const newdata = data.filter((datas) => {
        const templateName = datas.templateName.toLowerCase();
        const templateNameLength = templateName.length;
        const inputValueLength = inputValue.length;
    
        // Check if the templateName starts with the input value
        const startsWithInput = templateName.startsWith(inputValue);
    
        // Check if the templateName ends with the input value
        const endsWithInput = templateName.endsWith(inputValue);
    
        // Check if the input value appears in the middle of templateName
        const containsInput = templateName.includes(inputValue);
    
        return (startsWithInput && endsWithInput) || containsInput;
      });
    
      setdata(newdata);
    } else {
      return fetchTamplates();
    }
    
    
    

  }

  useEffect(() => {
    fetchTamplates();
  }, []);

    return(
        <>
{
	isLoading?
(<LoadingCompo/>)
:
(
<div className="bg-white w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-gray-700 p-5">Tamplates</h1>
          <p className="text-xxl font-semibold text-gray-500 pl-5 pb-5">
            Oversigt over dine dokumenter genereret på platformen
          </p>
        </div>


       
      </div>




	<form className="flex items-center p-5">   
        <label for="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input onChange={(e)=>handchangedata(e)} type="text" id="voice-search" className="bg-gray-50 border border-gray-500 text-gray-800 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-mycolor dark:focus:border-gray-800 text-xxl" placeholder="Search Mockups, Logos, Design Templates..." required />
           
        </div>
        <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-mycolor rounded-lg border border-gray-700 hover:bg-mycolor focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-mycolor dark:focus:ring-gray-800"><svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
    </form>

    <p className="text-gray-700 text-xl pl-5 pt-5">Categories</p>

      <div className="flex align-center p-5  overflow-x-auto">
      <button 
      
      onClick={(e)=>toggleCategory(e)}
      name="All"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Tamplate.All.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>All(0)</button>
      <button 
            
            onClick={(e)=>toggleCategory(e)}
            name="HR"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Tamplate.HR.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>HR(0)</button>
      <button 
      
            
      onClick={(e)=>toggleCategory(e)}
      name="Familly"
      
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Tamplate.Familly.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>Familly(0)</button>
      <button 
            
            onClick={(e)=>toggleCategory(e)}
      
         name="Personaldata"
      className={` text-gray-800 text-xll cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded  ${Tamplate.Personaldata.isChosed? 'bg-mycolor text-white':'dark:bg-mycolor dark:text-gray-300 bg-gray-100 '}`}>Personaldata(0)</button>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
 

  

 { data?  data.map((data)=>( 
	 <div className="relative mx-auto w-full p-5">
	<Link href={`/dashboard/smartdocs/${data.id}`} onClick={()=>{
    
createdoc(data.id)
    dispatch(on())}} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
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

		
    <p className="text-gray-700 p-5">{data.templateDescription}</p>


		<div className="grid grid-cols-2 mt-8">
		  <div className="flex items-center">
			<div className="relative">
			  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
			  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
			</div>

			<p className="ml-2 text-gray-800 line-clamp-1">
			  {data.templateName}
			</p>
		  </div>

		  <div className="flex justify-end">
			<p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
			  <span className="text-sm uppercase">
				$
			  </span>
			  <span className="text-lg">{data.cost}</span>/m
			</p>
		  </div>
		</div>
	  </div>
	</Link>
  </div>

 )):
 (
  <>
  <div  className="flex">
  <Skeleton/>
  <Skeleton/>
  <Skeleton/>

  </div>
  </>
 )
 }
 



  




</div>





    </div>	
)
}





        </>
    )
}