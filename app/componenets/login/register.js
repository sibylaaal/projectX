'use client'

import Link from "next/link";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import { useRouter } from "next/navigation";
import Alertd from "../error";
import LoadingCompo from "../home/loading";

export default function Register() {
    const [user, setUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      role:"SUSER"
    });
    const [submitStatus, setSubmitStatus] = useState({
        isSuccess: false,
        isError: false,
      });
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
  
    const [errors, setErrors] = useState({
      email: {
        iserror: false,
        error: "",
      },
      password: {
        iserror: false,
        error: "",
      },
      confirmPassword: {
        iserror: false,
        error: "",
      },
      firstname: {
        iserror: false,
        error: "",
      },
      lastname: {
        iserror: false,
        error: "",
      },
      phone: {
        iserror: false,
        error: "",
      },
      role:{
        iserror:false,
        error:""
      }
    });
    const [statu, setStatus] = useState(false);
    const [change, setchange] = useState(false);

const router=useRouter()

    useEffect(() => {
      if (statu) {
        // Redirect unauthorized users to the login page
        router.push('/dashboard/user');
      }
    }, [statu]);






    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const updatedUser = { ...user, [name]: value };
      setUser(updatedUser);
  
      if (name === 'role') {
        // If the changed input is the 'role' radio button, set the value directly.
        setUser({
          ...user,
          [name]: value,
        });
      } else {
        // If it's not the 'role' radio button, treat it as a text input and set the value.
        setUser({
          ...user,
          [name]: value,
        });
      }
      if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            email: {
              iserror: true,
              error: "Wrong email format",
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
  
      if (name === "confirmPassword") {
        if (value !== user.password) {
          setErrors({
            ...errors,
            confirmPassword: {
              iserror: true,
              error: "Passwords do not match",
            },
          });
        } else {
          setErrors({
            ...errors,
            confirmPassword: {
              iserror: false,
              error: "",
            },
          });
        }
      }
      if (name === "firstname") {
        if (value.length>13||value.length<3) {
          setErrors({
            ...errors,
            firstname: {
              iserror: true,
              error: "Passwords do not match",
            },
          });
        } else {
          setErrors({
            ...errors,
            firstname: {
              iserror: false,
              error: "",
            },
          });
        }
      }
      if (name === "lastname") {
        if (value.length>13||value.length<3) {
          setErrors({
            ...errors,
            lastname: {
              iserror: true,
              error: "Passwords do not match",
            },
          });
        } else {
          setErrors({
            ...errors,
            lastname: {
              iserror: false,
              error: "",
            },
          });
        }
      }
      if (name === "phone") {
        if (value.length>13||value.length<4) {
          setErrors({
            ...errors,
            phone: {
              iserror: true,
              error: "Passwords do not match",
            },
          });
        } else {
          setErrors({
            ...errors,
            phone: {
              iserror: false,
              error: "",
            },
          });
        }
      }
  
      // Add similar validation logic for firstname, lastname, and phone fields here
    };
    const createPost = async (user) => {
        try {
          setLoading(true)
          const response = await fetch("http://localhost:8081/api/auth/register", {
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
          data.user?  setStatus(true):''
          dispatch(login(data.user))
    
          setLoading(false)
          console.log("Response:", data);
        } catch (error) {
          setSubmitStatus({ isSuccess: false, isError: true });
          setLoading(false)
          console.error("Error sending POST request:", error);
        }
      };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      user.role=='' ?
      setErrors({
        ...errors,
        phone: {
          iserror: true,
          error: "please chose A role!!",
        },
      })
      :
      setErrors({
        ...errors,
        phone: {
          iserror: false,
          error: "",
        },
      })

      await createPost(user);
      console.log(user)
    
    
    };
  
    return (


<div className="relative min-h-screen flex ">
  <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
    <div
      className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
      style={{
        backgroundImage:
        "url(/pic1.jpg)"
      }}
    >
      <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0" />
      <div className="w-full  max-w-md z-10">
        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
          Reference site about Lorem Ipsum..
        </div>
        <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
          {" "}
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </div>
      </div>
      {/*-remove custom style*/}
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
    <div className="md:flex md:items-center md:justify-center w-full sm:w-full md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
      <div className="w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome !
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Create A new Account
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <a
            href="https://www.behance.net/ajeeshmon"
            target="_blank"
            className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
          >
            <img
              className="w-4 h-4"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
            />
          </a>
          <a
            href="https://twitter.com/ajeemon?lang=en"
            target="_blank"
            className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
          >
            <img
              className="w-4 h-4"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            />
          </a>
          <a
            href="https://in.linkedin.com/in/ajeeshmon"
            target="_blank"
            className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
              className="w-4 h-4"
            />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-200" />
          <span className="text-gray-300 font-normal">or continue with</span>
          <span className="h-px w-16 bg-gray-200" />
        </div>
        <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
     
  
            <div><label >email</label>
          <div st="true"
          yle={{ borderColor: errors.email.iserror ? 'red' : 'white' }} className="flex items-center border-3  rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

            <input id="333" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none w-full" type="text" name="email"  />
          </div>
          {errors.email.iserror ? (


 



            <p className="text-sm text-red-600 dark:text-red-200 mb-2 ">
            {errors.email.error}
            </p>
    



    


            
          ) : (
            ''
          )}</div>

<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
    <div>
            <label >firstname</label>
          <div st="true" style={{ borderColor: errors.firstname.iserror ? 'red' : 'white' }} className="flex items-center rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input id="3" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none" type="text" name="firstname"   />
          </div>
          {errors.firstname.iserror ? (


 


            <p className="text-sm text-red-600 dark:text-red-200">

{errors.firstname.error}
            
            
                      </p>

    


            
          ) : (
            ''
          )}
    </div>
        
<div>    <label >lastname</label>
          <div st="true" style={{ borderColor: errors.lastname.iserror ? 'red' : 'white' }} className="flex items-center rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input id="377" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none" type="text" name="lastname"  />
          </div>
          {errors.lastname.iserror ? (


 


<p className="text-sm text-red-600 dark:text-red-200">

            {errors.lastname.error}


          </p>
      


    


            
          ) : (
            ''
          )}</div>
        
        <div>     <label >phone</label>
          <div st="true" style={{ borderColor: errors.phone.iserror ? 'red' : 'white' }} className="flex items-center rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input id="" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none" type="number" name="phone"  />
          </div>
          {errors.phone.iserror ? (


 




    <p className="text-sm text-red-600 dark:text-red-200">

{errors.phone.error}


          </p>




    


            
          ) : (
            ''
          )}</div>

       
<div><label >password</label>
          <div st="true" style={{ borderColor: errors.password.iserror ? 'red' : 'white' }} className="flex items-center  rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

            <input id="53" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none" type="password" name="password"   />
          </div>
          {errors.password.iserror ? (


 




     
 
 <p className="text-sm text-red-600 dark:text-red-200 mb-2 ">
            {errors.password.error}
            </p>
    



    


            
          ) : (
            ''
          )}</div>


 



  </div>
  
  <div><label className="mt-2" >confirmPassword</label>
          <div st="true" style={{ borderColor: errors.confirmPassword.iserror ? 'red' : 'white' }} className="flex items-center rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

            <input id="3000" onChange={(e)=>handleInputChange(e)} className="pl-1 outline-none border-none w-full" type="password" name="confirmPassword"   />
          </div>
          {errors.confirmPassword.iserror ? (


 


<p className="text-sm text-red-600 dark:text-red-200 mb-2 ">
{errors.confirmPassword.error}
</p>





    


            
          ) : (
            ''
          )}</div>


            <button
              type="submit"
              disabled={errors.password.iserror==true || errors.email.iserror==true || errors.firstname.iserror==true || errors.lastname.iserror==true || errors.confirmPassword.iserror==true || errors.phone.error  ||user.password==""||user.email==""||user.phone==""||user.firstname==""||user.lastname==""||user.confirmPassword==""||user.role=="" }

              className={`block w-full bg-mycolor mt-4 py-2 rounded-2xl text-white font-semibold mb-2 ${
                loading ? "disabled" : ""
              }`}
            >
              {loading ? (

<>

  <div className={`flex justify-center items-center`}>
    <div
      className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  </div>
</>

) : (
                "Register"
              )}
            </button>
            {
          submitStatus.isError?

(

<div className="flex w-full max-w-sm overflow-hidden   p-5  rounded-lg  dark:bg-mycolor">
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
            <span onClick={()=>setchange(true)} className="text-sm ml-2 hover:text-gray-500 cursor-pointer">
              <Link href={"/password/reset"}>Forgot password?</Link>
            </span>
            <span onClick={()=>setchange(true)}  className="text-sm ml-2 mb-5 hover:text-gray-500 cursor-pointer">
              <Link href={"/login"}>Sign up?</Link>
            </span>
          </form>
      </div>
    </div>
  </div>
</div>


    );
  }