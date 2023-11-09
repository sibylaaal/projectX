
'use client'

import Edit from "./edit"
import Tabelcategories from "./tabelcategories"
import { useEffect, useState } from "react"
import Add from "./add"
import { useDispatch, useSelector } from "react-redux"
import { off } from "../../../redux/actions/SidebarActions"
import LoadingCompo from "../../../home/loading"
export default function AdminCategories() {
  const [edit, setedit] = useState(false)
  const [add, setadd] = useState(false)
  const [added, setadded] = useState(false);
  const [updated, setupdated] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [curentcate, setcurentcate] = useState(null);
  const [editid, seteditid] = useState(null);
  const   isLoading=useSelector(state=>state.Side.Loading)
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(off())
  }, [])
  
  return (
    <>

{
  isLoading?
  (<LoadingCompo/>)
  :
  (
<>

{
    add?
    (<Add added={setadded}  add={setadd} edit={setedit} />)
    :
    (
''    )
  }












    {
      edit?

      (
      <>
      
  <Edit curent={curentcate} edited={setupdated} id={editid} close={setedit}/>


</>
    )
    :
    (
''    )
    }


    {
      !edit&&!add?
      (   <Tabelcategories setcurentcate={setcurentcate}  added={added} deleted={deleted} updated={updated} uodateds={setupdated}  canceladded={setadded} editid={seteditid} sdeleted={deleted} deleteds={setdeleted}  add={setadd} edit={setedit} />
      )
      :
      ('')
    }
</>
  )
}

      </>
  )
}
