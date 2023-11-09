'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingCompo from "../../home/loading"
import { useDispatch, useSelector } from "react-redux";
import { off, on } from "../../redux/actions/SidebarActions";




export default function Index()


{
    

    const   isLoading=useSelector(state=>state.Side.Loading)
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(off())
    }, [])

    

    return(

<>
{
    isLoading?
    (<LoadingCompo/>)
  :
  (<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white text-gray-600 ">Services</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                                 <Link onClick={()=>dispatch(on())} href="/dashboard/user/tamplate" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">

                <div className="flex flex-col-3 justify-between py-6 lg:mx-6 ">   

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

                     <p className=" ml-2 mr-2 text-gray-500  hover:no-underline"> Create  A Document</p>    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                    
                </div>                    </Link>

            </div>

 
        </div>
    </div>
</section>)
}

</>
    
    )
}