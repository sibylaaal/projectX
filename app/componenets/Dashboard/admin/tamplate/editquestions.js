'use client'

import { useEffect, useState } from 'react';
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
export default function EditQuestions(props){

const [TextDoc, setTextDoc] = useState('');
const [formData, setFormData] = useState([]); 
const [checkbox, setcheckbox] = useState(false);
const [data, setdata] = useState({
  questionText:"",
  valueType:"",
  Description:"",
  Texte:"",
  ChoiceRelatedTextePair:[],
  DescriptionDetails:""
});
const addRow = (e) => {
  e.preventDefault()
  // Add a new row to the form data
  setFormData([...formData, { choice: '', relatedTexte: '' }]);
};

const fetchquestions = () => {
  fetch(`http://localhost:8081/api/admin/question/${props.curent.id}`)
    .then((res) => res.json())
    .then((res) => {
      
      setdata(
      {
...data,
questionText:res.questionText,
valueType:res.valueType,
Description:res.description,
Texte:res.texte,
DescriptionDetails:res.descriptionDetails

      }
    )
  setTextDoc(res.texte)
  if(res.choices){
      setFormData(res.choices);  

  }
  });
}
useEffect(() => {
  fetchquestions()
}, []);

const handleInputChange = (index, fieldName, value) => {
  const updatedData = [...formData];
  updatedData[index][fieldName] = value;
  setFormData(updatedData);
  console.log(formData)
};
const handleCheckbox=(e)=>{

  if(e.target.value==='checkbox'){
    setcheckbox(true)
  }else{
    setcheckbox(false)
  }
  
  
  }
const removeRow = (index,e) => {
  e.preventDefault()
  const updatedData = [...formData];
  updatedData.splice(index, 1);
  setFormData(updatedData);
};
const handleChange = (value) => {
  setTextDoc(value)
};
const handleSubmit = (e) => {
  e.preventDefault();

  // Convert TextDoc to a plain string


  fetch(`http://localhost:8081/api/admin/update_question/${props.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      questionText: e.target.question.value,
      valueType: e.target.type.value,
      descriptionDetails: e.target.details.value,
      Description: e.target.descr.value,
      texte:TextDoc,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res)
    .then((res) => {
      console.log(res);
      props.questionss(true);
      props.Editquestionss(false);
      props.edited(true);
    });
};


  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
    ],
  };
  
  const formats = [ 
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'link',
    'image',
  ];
   

    return(
        <>
        
        <form onSubmit={(e)=>handleSubmit(e)} className="bg-white p-5 -xl-xl ">
        <div className="flex aling-center   mt-5 mb-1 ">
        <span className='text-3xl font-bold text-mycolor py-5 mb-5'>Edit Question</span>



      
    
   
  
         </div>

  <label className="block ml-3 uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-last-name">
    question 1
  </label>
  <div className=" space-between ">
    <input
    defaultValue={data.questionText}
      className="appearance-none block mb-5 w-full m-3  bg-gray-200 text-mycolor border border-gray-200 -xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
      type="text"
name="question"
      placeholder="How much children you have?"
    />


<div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" for="grid-first-name">
            Descrptions
          </label>
          <textarea id="text" defaultValue={data.Description} name="descr" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

 <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" for="grid-first-name">
          Details
          </label>
          <textarea defaultValue={data.DescriptionDetails} id="text" name="details" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>




  
 
 
   

<div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" for="grid-first-name">
            Your Content
          </label>


          <SunEditor
setContents={TextDoc}   


showToolbar={true}
        onChange={handleChange}
        setDefaultStyle="height: auto"
        setOptions={{
          buttonList: [
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "list",
              "align",
              "fontSize",
              "formatBlock",
              "table",
              "image"
            ]
          ]
        }}
      />
          <div>
     
    </div>

        </div>
 
        <select onChange={(e)=>handleCheckbox(e)} name="type" className="block appearance-none m-2 w-full bg-gray-200 border border-gray-200 text-mycolor py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option value={data.valueType.length>11? 'checkbox':data.valueType} >{data.valueType.length>11? 'checkbox':data.valueType}</option>
              <option value={"Textaria"} >Paragraph</option>
              <option value={"input"} >text</option>
              <option value={"checkbox"} >checkbox</option>


              <option value={"number"}>number</option>
            </select>
 

  </div>
  <div className='flex space-between'>
    <>
    <button      onClick={() => {
            props.questionss(true);
            props.Editquestionss(false);
          }}          className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >cancel</button>
    <button    type="submit"         className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >save</button>
    </> 
    
      </div>
</form>

        </>
    )
}