
'use client'

import EditTamplate from "./tamplate/edit"
import Questions from "./tamplate/questions"
import AddTamplate from "./tamplate/add"
import Tabeltamplate from "./tamplate/tabetamplet"
import { useEffect, useState } from "react"
import EditQuestions from "./tamplate/editquestions"
import { useDispatch, useSelector } from "react-redux"
import { off } from "../../redux/actions/SidebarActions"
import AssigneCategory from "./tamplate/assigne"
import LoadingCompo from "../../home/loading"
export default function AdminTamplate() {
const [edit, setedit] = useState(false)
const [add, setadd] = useState(false)
const [updated, setupdated] = useState(false);
const [Assigne, setAssigne] = useState(false);
const [Assigned, setAssigned] = useState(false);
const [updatedQ, setupdatedQ] = useState(false);
const [added, setadded] = useState(false);
const [editid, seteditid] = useState(null)
const [Curentqustions, setCurentQuestion] = useState(null);
const [deleted, setdeleted] = useState(false);
const [TemplateId, setTemplateId] = useState(null);
const [questions, setquestions] = useState(false)
const [Editquestions, setEditquestions] = useState(false)
const [EditquestionId, setEditquestionId] = useState(null);
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
  (<>
  

{
  Assigne?
  (<AssigneCategory TemplateId={TemplateId} setAssigned={setAssigned}     setAssigne={setAssigne} />):('')
}

  {
    add?
    (
    <AddTamplate added={setadded}  add={setadd} edit={setedit} />):('')}
     {
    questions?
    (<Questions setCurentQuestion={setCurentQuestion} setid={setEditquestionId} TemplateId={TemplateId} edited={setupdatedQ}  updated={updatedQ}  Editquestionss={setEditquestions} questionss={setquestions} />)
      :
    ('')
  }
     {
    Editquestions?
    (<EditQuestions curent={Curentqustions} edited={setupdatedQ} id={EditquestionId} Editquestionss={setEditquestions} questionss={setquestions}   />)
      :
    ('')
  }




    {
      edit?

      (
      <>
      
  <EditTamplate edited={setupdated} id={editid} close={setedit}/>


</>
    )
    :
    (
''    )
    }


    {
      !edit&&!add&&!questions&&!Editquestions&&!Assigne?
      (   <Tabeltamplate   TemplateId={setTemplateId} Assigned={Assigned} setAssigned={setAssigned} setAssigne={setAssigne}  added={added} deleted={deleted} updated={updated} uodateds={setupdated}  canceladded={setadded} editid={seteditid} sdeleted={deleted} deleteds={setdeleted}  add={setadd} edit={setedit}  questionss={setquestions} />
      )
      :
      ('')
    }
  </>)
}

 
      </>
  )
}
