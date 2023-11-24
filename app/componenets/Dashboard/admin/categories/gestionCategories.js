
'use client'

import dynamic from "next/dynamic"
import Tabelcategories from "./tabelcategories"
import {  useState } from "react"

export default function AdminCategories() {
  const [edit, setedit] = useState(false)
  const [add, setadd] = useState(false)
  const [added, setadded] = useState(false);
  const [updated, setupdated] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [curentcate, setcurentcate] = useState(null);
  const [editid, seteditid] = useState(null);
 
  const Edit = dynamic(() => import('./edit'));
  const Add = dynamic(() => import('./add'));


  return (
    <>


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
 

      </>
  )
}
