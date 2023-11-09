'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import LoadingCompo from "../home/loading";


export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [Loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: {
      iserror: false,
      error: "",
    },
    password: {
      iserror: false,
      error: "",
    },
    fetch:{
      iserror:false
    }
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSuccess: false,
    isError: false,
  });

  const dispatch=useDispatch()

  const [statu, setStatus] = useState(false);
  const router=useRouter()  
  const userData = useSelector((state) => state.Auth.user);
 

  useEffect(() => {
    if (statu) {
      localStorage.setItem("USERX",JSON.stringify(userData))
     switch (userData.authorities[0].authority) {
      case '':
       router.push('/dashboard/user');
       
        break;
        case 'user':
        router.push('/dashboard/user');
        break;
        case 'ADMIN':
          router.push('/dashboard/admin');
          break;
          case 'advisor':
          router.push('/dashboard/advisor');
          break;




      default:
        router.push('/dashboard/user');

        break;
     }
    }
  }, [statu]);
  // Use useSelector to access the Redux state
  const AuthStatus = useSelector((state) => state.Auth.isLogged);
const [change, setchange] = useState(false)
  useEffect(()=>{  

    setStatus(AuthStatus)
    },[AuthStatus])

  const createPost = async (user) => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:8081/api/auth/login", {
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      data.user?       setSubmitStatus({ isSuccess: true, isError: false }):''
      dispatch(login(data.user))

      setLoading(false)
      console.log("Response:", data);
    } catch (error) {
      setSubmitStatus({ isSuccess: false, isError: true });
      setLoading(false)
      console.error("Error sending POST request:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      
      if (!emailRegex.test(value)) { 
        setErrors({
          ...errors,
          email: {
            iserror: true,
            error: "wrong email format",
          },
        });
      } else {
        setErrors({
          ...errors,
          email: {
            iserror: false,
            error: "",
          },
        });
      }
    }

    if (name === "password") {
      if (value.length < 3) {
        setErrors({
          ...errors,
          password: {
            iserror: true,
            error: "Password should be more than 3 characters",
          },
        });
      } else {
        setErrors({
          ...errors,
          password: {
            iserror: false,
            error: "",
          },
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(user);


  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="dark:bg-slate-900  ">
      <div className="relative overflow-hidden w-full bg-mycolor i justify-around items-center ">


      <div className="">
        

        <img className="logo2 " src="/logo2.svg" alt="" />
      </div>
      <div class="relative z-0">



</div>



  

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
        <form className="bg-white w-50 rounded-lg p-20 text-center" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div style={{ borderColor: errors.email.iserror ? 'red' : 'white' }} className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

            <input onChange={handleInputChange} className="pl-2 outline-none border-none w-full" type="text" name="email" id="33"  />
          </div>
  
          <div style={{ borderColor: errors.password.iserror ? 'red' : 'white' }} className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

            <input onChange={handleInputChange} className="pl-2 outline-none border-none w-full" type="password" name="password" id="333"  />
          </div>
      
          <button
            type="submit"
            className={`block w-full bg-mycolor mt-4 py-2 rounded-2xl text-white font-semibold mb-2 ${errors.password.error || errors.email.error || user.email==''||user.password=='' ? 'disabled' : ''}`}
            disabled={errors.password.error || errors.email.error ||user.password==""||user.email==""}

          >
        
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
        'Login'  
        
        }
            
          </button>     {
          submitStatus.isError?

(

<div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
    <div className="flex items-center justify-center w-12 bg-red-500">
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
    </div>

    <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
            <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
            <p className="text-sm text-gray-600 dark:text-gray-200">
           Wrong email or password!!
            </p>
        </div>
    </div>
</div>


)
          :
          ''
        }
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"> <Link onClick={()=>setchange(true)} href={'/password/reset'} >Forgot Password ?</Link> </span>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">you dont have a account <Link onClick={()=>setchange(true)} href={'register'} >  <strong>register</strong> </Link> ?</span>

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
