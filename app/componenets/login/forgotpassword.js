'use client'
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Changepassword } from "../redux/actions/AuthActions";
import Alertd from "../error";

export default function Reset() {
const dispatch=useDispatch()

    const [email, setemail] = useState('')
    const [Loading, setLoading] = useState(false)
    const [error, seterror] = useState(false)
    const [change, setchange] = useState(false);
    const [statu, setstatu] = useState(false);
    const [success, setsuccess] = useState(false)
const handlechange=(e)=>{

    setemail(e.target.value)
    console.log(email)
}



const handlsubmit= async (e)=>{
    e.preventDefault();
    setLoading(true)
    setemail(e.target.value)
    try {
        const response = await fetch("http://localhost:8081/api/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:email}),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData)
          seterror(true);
          setLoading(false)
          setsuccess(false);

        } else {
          setsuccess(true);
          seterror(false)
          setLoading(false)
        }
      } catch (error) {
        console.error("Error sending POST request:", error);
        seterror("An error occurred while resetting the password.");
      } finally {

        setLoading(false);
      }
    };





    return (
      <div className=" ">
      <div className="relative overflow-hidden w-full bg-mycolor i justify-around items-center ">
      <div className="">
        

        <img className="logo2 " src="/logo2.svg" alt="" />
      </div>
      <div className="absolute -bottom-32 -left-40 md:w-60 md:h-60 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -bottom-40 -left-20 md:w-60 md:h-60 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-40 -right-0 md:w-60 md:h-60 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-20 -right-20 md:w-60 md:h-60 border-4 rounded-full border-opacity-30 border-t-8"></div>
  
      {change?
      (
 <>


<div className="flex justify-center h-screen">
<LoadingCompo/>

 </div>  </>
 
      )
    :
    ( 
    <>
     {
        statu?  
(
  

<>


<div className="flex justify-center h-screen">
<LoadingCompo/>

 </div> 


</>
)
        :
        (
        <>
      
      <div className="flex justify-center h-screen">
  <div className="w-50">

  <form onSubmit={handlsubmit} className="bg-white p-10">
  <h1 className="text-gray-800 font-bold text-2xl mb-1">Reset Your Account!</h1>
  <p className="text-sm font-normal text-gray-600 mb-7">Be Safe</p>

<label>Email</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
          <input onChange={handlechange} className="pl-2 outline-none border-none" type="text" name="email" id=""  />
</div>


                  <button 
                  
                  disabled={!email}
                  
                  type="submit" className="block w-full bg-mycolor mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                  {Loading?
(
<div className="flex justify-center items-center ">
<div
className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
role="status"
>
<span
className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
>Loading...</span>
</div>
</div>


)
:
'Reset'  

}
                  </button>



{
success?  (
<div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
<div className="flex items-center justify-center w-12 bg-emerald-500">
<svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
</svg>
</div>

<div className="px-4 py-2 -mx-3">
<div className="mx-3">
<span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
<p className="text-sm text-gray-600 dark:text-gray-200">


!Check your email Inbox


</p>
</div>
</div>
</div>

):('')
}

{
error?
(
<><div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
<div className="flex items-center justify-center w-12 bg-red-500">
<svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
</svg>
</div>

<div className="px-4 py-2 -mx-3">
<div className="mx-3">
<span className="font-semibold text-red-500 dark:text-red-400">Error</span>
<p className="text-sm text-gray-600 dark:text-gray-200">
Wrong email !!
</p>
</div>
</div>
</div>
<Alertd message={'invalid Email'}/>
</>


)
:
('')
}













<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"><Link href={'/login'} >sign up ?</Link> </span>

</form>


        </div>
 </div> 
     </>  

        )
      }
     </>   )}
       </div>
    </div>
    );
  
  }












