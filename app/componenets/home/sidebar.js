
'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function Sidebar(){
    const [status, setStatus] = useState(true);
    const [myUser, setMyUser] = useState({});
  
    // Use useSelector to access the Redux state
    const authStatus = useSelector((state) => state.Auth.isLogged);
    const user = useSelector((state) => state.Auth.user);
  
    // Use the authStatus directly, no need to store it in state
    useEffect(() => {
      setStatus(authStatus);
      setMyUser(user);
    }, [authStatus, user]);


    const { push } = useRouter();


    status?    '':push('/login')

    return(
       ''
    )
}