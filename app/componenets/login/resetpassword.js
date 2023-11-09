'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import Link from 'next/link'




export default function ResetPassword() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Status, setStatus] = useState(true)
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState({
    password: {
      iserror: false,
      error: "",
    },
    confirmpassword: {
      iserror: false,
      error: "",
    },
  });
  const { push } = useRouter();

  useEffect(() => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("token");
    setToken(token);
  }, []);

  const [data, setPassword] = useState({
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...data, [name]: value };
    setPassword(updatedUser);

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

    if (name === "confirmpassword") {
      if (value !== data.password) {
        setErrors({
          ...errors,
          confirmpassword: {
            iserror: true,
            error: "Passwords do not match",
          },
        });
      } else {
        setErrors({
          ...errors,
          confirmpassword: {
            iserror: false,
            error: "",
          },
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
console.log({
  token:token,
  newPassword:data.password
})
    try {
      const response = await fetch("http://localhost:8081/api/auth/reset",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          newPassword: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(true);
        setDone(false);
        setLoading(false);
        throw new Error(errorData.message);
      }else{
           setDone(true); 
           push('/login')
            setError(false);

      }

      const responseData = await response.json();
        
      setLoading(false);
      
      console.log("Response:", responseData);
    } catch (error) {
      setLoading(false);
      console.error("Error sending POST request:", error);
    }
  };

  return Status ? (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-mycolor i justify-around items-center hidden">
        <div>
        <img className="logo2" src="/logo2.svg" alt="" />

        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        {done ? (
          <>
            <div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
              <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="font-medium">Success alert!</span> Your Password Has Been Changed Successfully <strong className=""> <Link href="">Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</Link></strong>
              </div>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">The Final step !</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome again</p>

            <label>Password</label>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
              <input onChange={handleChange} className="pl-2 outline-none border-none" type="password" name="password" id="" />
            
            </div>
  {errors.password.iserror ? (
                <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
                  <div className="flex items-center justify-center w-12 bg-red-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                  </div>

                  <div className="px-4 py-2 -mx-3">
                    <div className="mx-3">
                      <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                      <p className="text-sm text-gray-600 dark:text-gray-200">Wrong password format!</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            <label>Confirm Password</label>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
              <input onChange={(e) => handleChange(e)} className="pl-2 outline-none border-none" type="password" name="confirmpassword" id="" />
          
            </div>
    {errors.confirmpassword.iserror ? (
                <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
                  <div className="flex items-center justify-center w-12 bg-red-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                  </div>

                  <div className="px-4 py-2 -mx-3">
                    <div className="mx-3">
                      <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                      <p className="text-sm text-gray-600 dark:text-gray-200">The Password is not matching</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="block w-full bg-mycolor mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              disabled={errors.password.iserror || errors.confirmpassword.iserror || data.password === "" || data.confirmpassword === ""}
            >
              {Loading ? (
                <div className="flex justify-center items-center ">
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                </div>
              ) : (
                "Submit"
              )}
            </button>

            {error ? (
              <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-mycolor">
                <div className="flex items-center justify-center w-12 bg-red-500">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">Wrong Credentials, Try again Later!!</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        )}
      </div>
    </div>
  ) : (
    push("/404")
  );
}
