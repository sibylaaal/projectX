
'use client'

import dynamic from "next/dynamic"
import Questions from "./tamplate/questions"
import Tabeltamplate from "./tamplate/tabetamplet"
import {  useState } from "react"
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

const EditQuestions = dynamic(() => import('./tamplate/editquestions'));
const EditTamplate = dynamic(() => import('./tamplate/edit'));

const AddTamplate = dynamic(() => import('./tamplate/add'));

const AssigneCategory = dynamic(() => import('./tamplate/assigne'));

  return (
    <>


<>
  

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
  </>


 
      </>
  )
}
