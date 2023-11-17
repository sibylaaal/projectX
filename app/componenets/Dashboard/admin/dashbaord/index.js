'use client'
import { useEffect, useState } from "react";
import SuccessAlert from "../../../successalert";
import { useDispatch, useSelector } from "react-redux";
import LoadingCompo from "../../../home/loading";
import { off } from "../../../redux/actions/SidebarActions";


export default function UsersList() {
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [edited, setedited] = useState(false);

  const [deleted, setdeleted] = useState(false);



const [Userdata, setUser] = useState(
    {
        id:0,
        firstname:"",
        lastname:"",
        adress:"",
        email:""
    }
);

  const fetchUsers = () => {
    fetch('http://localhost:8081/api/admin/all_users')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setTimeout(() => {
        setedited(false)
      setdeleted(false)
    }, 2000);
  }, [data]);
  const deleteUsers = (id) => {
    fetch(`http://localhost:8081/api/admin/delete_user/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      })
      .then(() => {
        fetchUsers();
        setdeleted(true)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    fetch(`http://localhost:8081/api/admin/update_user/${Userdata.id}`,{
        method: 'PUT',
        body: JSON.stringify({
            firstname:e.target.firstname.value,
            lastname:e.target.lastname.value,
            email:e.target.email.value,
            adress:"jfhksdhfjksd"
        }),
        headers:{
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
            fetchUsers()
            setedited(true)
           setEdit(false)
        });










  };

  return (

      <div>
        {edit ? (
       <form  onSubmit={(e)=>handleSubmit(e)} className="Ani">      
         <div className='flex justify-center '>
         <div className="w-full bg-white p-5 m-3  rounded-xl">        <span  className='text-3xl font-bold text-mycolor py-5 mb-5 py-5'>Edit user</span>

     <div className="flex flex-wrap -mx-3 mb-6 mt-10">
       <div className="w-full px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
           firstname
         </label>
         <input defaultValue={Userdata.firstname}  className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="firstname" type="text" />
       </div>
       <div className="w-full px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
           lastname
         </label>
         <input defaultValue={Userdata.lastname}  className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="lastname" type="text" />
       </div>
       <div className="w-full px-3 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
           email
         </label>
         <input defaultValue={Userdata.email} disabled   className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="email" type="text" />

       </div>

     </div>
   
     <div className="flex flex-wrap -mx-3 mb-2">
    
     
    
     </div>
   
     <div className='flex space-between'>
   <>
   <button   onClick={()=>setEdit(false)}          className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
   >cancel</button>
   <button      type="submit"       className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
   >save</button>
   </> 
   
     </div>
   </div></div></form>           
        ) : (
          <div className="grid grid-cols-1 2xl:grid-cols-1 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">Users</h3>
              </div>
              {edited || deleted ? (
                <SuccessAlert message={deleted ? "User has been deleted" : "User has been updated"} />
              ) : null}
              <div className="flow-root">
                {data && data.map((el) => (
                  <ul key={el.userId} role="list" className="divide-y divide-gray-200">
                    {el.role.name === 'ADMIN' ? (
                      <li key={el.userId} className="py-3 sm:py-4 cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0"></div>
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="/default-profile-account-unknown-icon-black-silhouette-free-vector.jpeg" alt="Neil image" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {el.firstname}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a className="__cf_email__" data-cfemail="17772a767e7b57607e7973646372653974787a">{el.email}</a>
                            </p>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        </div>
                      </li>
                    ) : (
                      <li key={el.userId} className="py-3 sm:py-4 cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <svg onClick={() => deleteUsers(el.userId)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </div>
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="/default-profile-account-unknown-icon-black-silhouette-free-vector.jpeg" alt="Neil image" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {el.firstname}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              <a className="__cf_email__" data-cfemail="17772a767e7b57607e7973646372653974787a">{el.email}</a>
                            </p>
                          </div>
                          <svg
                            onClick={() => {
                              setUser({
                                ...Userdata,
                                id: el.userId,
                                firstname: el.firstname,
                                lastname: el.lastname,
                                email: el.email,
                                adress: el.adress,
                              });
                              setEdit(true);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </div>
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
 
  );
}





