
'use client'

import { useEffect, useState } from "react";
import Skeleton from "../../../../componenets/skeleton"
import SuccessAlert from "../../../successalert";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
/** 
 * import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
 * 
*/


export default function Questions(props){
 const [Questions, setQuestions] = useState([])
 const [Added, setAdded] = useState(false)
 const [loading, setloading] = useState(true);
 const [title, settitle] = useState(false);
const [TextDoc, setTextDoc] = useState('');
const [checkbox, setcheckbox] = useState(false);
const [colomns, setcolomns] = useState(1);
const [formData, setFormData] = useState({ choice: '', newRelatedText: '' }); 
const [assignechoices, setassignechoices] = useState(false);
const [Choices, setChoices] = useState(false);
const [CheckChoices, setCheckChoices] = useState([]);
const [update, setupdate] = useState(false);
const [content, setcontent] = useState(null);

const handleInputChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const Sorting = (value) => {
  const newValue = value.replace(/checkbox\//g, ''); // Remove "checkbox/" from the string

  const elements = newValue.split('/'); // Split the string into individual elements

  const objectsArray = [];
  const objectSize = 3; // Each object has 3 properties: id, choice, relatedText

  for (let i = 0; i < elements.length; i += objectSize) {
    // Check if there are enough elements to create an object
    if (i + objectSize <= elements.length) {
      const obj = {
        id: elements[i],
        choice: elements[i + 1],
        relatedText: elements[i + 2],
      };
      objectsArray.push(obj);
      setCheckChoices(objectsArray)
    }
  }

  // Output each object in a readable format
  objectsArray.forEach(obj => {
    console.log(obj); // Output individual objects
  });

  // Or, to display the entire array as a JSON string
  console.log(JSON.stringify(objectsArray));

  // setCheckChoices(objectsArray); // Assuming setCheckChoices is a function to handle the result
};

// Example usage:






const handleCheckbox=(e)=>{

if(e.target.value==='checkbox'){
  setcheckbox(true)
}else{
  setcheckbox(false)
}


}







 const [selectedId, setselectedId] = useState({

  id:null,
  questionText:"",
  valueType:"",
  Texte:'',

 });
 
 const fetchTamplates = () => {
  fetch(`http://localhost:8081/api/admin/find_questions_by_template/${props.TemplateId}`)
    .then((res) => res.json())
    .then((res) => {
      setQuestions(res)
      setloading(false)
    });
}
 const [deleted, setdeleted] = useState(false)

useEffect(() => {
  fetchTamplates();
}, []);
   useEffect(() => {
    setTimeout(() => {
      props.edited(false);
      setdeleted(false)
      setAdded(false)
    }, 2000);
  }, [Questions]);
const handleSubmit = (e) => {
  e.preventDefault();


    fetch(`http://localhost:8081/api/admin/create_question/${props.TemplateId}`, {
    
    method: 'POST',
    body: JSON.stringify({
      
      questionText: e.target.question.value,
      valueType:e.target.type.value,
      description:e.target.Description.value,
      texte:TextDoc,
      descriptionDetails:e.target.DescriptionDetails.value
     

     }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setAdded(true)
      setAdd(false)
      console.log({
        questionText: e.target.question.value,
        valueType:e.target.type.value,
        template:{id:props.TemplateId},
        texte:TextDoc,
      })
         setselectedId({  id:null,
          questionText:"",
          valueType:"",
          template:{id:0},
          Texte:'',
       
        })
         fetchTamplates()
    });



};


const handlechoices = (e) => {
  e.preventDefault();


    fetch(`http://localhost:8081/api/admin/add-choice-question/${selectedId.id}`, {
    
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.text())
    .then((res) => {
      setAdded(true)
      setassignechoices(false)
      console.log({
        formData
      })
      
         fetchTamplates()
    });



};
const updatechoices = (e) => {
  e.preventDefault();


    fetch(`http://localhost:8081/api/admin/update-choice/${selectedId.id}/${selectedId.idchoice}`, {
    
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.text())
    .then((res) => {


      setassignechoices(false)
      console.log({
        formData
      })
       setupdate(false)
      
         fetchTamplates()
         props.edited(true)
    });



};

const deleteQuestion = (id) => {
  fetch(`http://localhost:8081/api/admin/delete_question/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .then(() => {
      fetchTamplates();
      setdeleted(true)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};






const handleChange = (value) => {
  const contentWithValues = value.replace(/\[Name\]/g, 'John Doe');
  setTextDoc(contentWithValues);
};

      
 const [Add, setAdd] = useState(false)


    return(
        <>
        



  {
    !Add&&!assignechoices&&!Choices&&!update&&!content? (         <div className="bg-white  p-5">
                <div className="flex">
        <div className="flex aling-center   mt-5 mb-1 ">
        <p className="text-2xl text-gray-500 font-semibold m-4">Questions  </p>



      
    
        <button  onClick={()=>setAdd(true)}            className={`block w-10 bg-mycolor mt-4  text-white  rounded-xl font-semibold mb-2 m-2`}
    >+</button>
   


         </div>
</div>




         
   {Added || props.updated || deleted ? (
  <SuccessAlert message={deleted ? "Your question has been deleted" : (props.updated ? "Your question has been updated" : "Your question has been added")} />
) : null}


{
  loading?
  (<Skeleton/>)
  :(<>{
 Questions.length!=0?   Questions.map((qst,index)=>(
       <>
    
    <div key={index} className="flex   sm:col-1 space-between p-3">
  <div
  className=" p-5  w-full whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
> 



<div className="flex rounded-full justify-end ">
<button className=" ext-white bg-mycolor p-1 rounded-md ml-2   sm:p-2 "  onClick={() => {
      props.setid(qst.id)
      props.setCurentQuestion({
    id:qst.id
      })
  props.questionss(false);
  props.Editquestionss(true);
}}

            
    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
  </button>
  
  <button onClick={()=>deleteQuestion(qst.id)}  className="ext-white bg-mycolor p-1 rounded-md ml-2   sm:p-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
  </button>
  {

    qst.valueType=='checkbox'&&
    <button className="text-white bg-mycolor p-2 rounded-md ml-2   sm:p-2"  onClick={() => {
      setselectedId({
        ...selectedId,
    id:qst.id
      })
 setassignechoices(true);
}}

            
    >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  </button>
 }

{
  qst.valueType.length>10&&  (
  
  <>
 <button className="text-white bg-mycolor p-2 rounded-md ml-2 mr-2  sm:p-2"  onClick={() => {
  Sorting(qst.valueType)
  setselectedId({
    ...selectedId,
id:qst.id
  })
 setChoices(true);
}}

            
    >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
  </button>
  
  
  <button className="text-white bg-mycolor p-2 rounded-md "  onClick={() => {

    setassignechoices(true);
   }}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
     </button> 
     </>
     )

}

  
  
  
 </div>

 <div className=" p-20  text-center ">


{
  qst.Texte!=''? 
  (       <button className="text-white bg-mycolor p-2 rounded-md ml-2 mr-2 flex col-1 justify-center w-full sm:p-2"  onClick={() => {

   setcontent(qst.texte);
  }}
  
              
      >
      See The Content
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
    </button>        /**<div className="ql-editor relative " dangerouslySetInnerHTML={{ __html: qst.texte }} /> */ 
)
  :
  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>
)
}</div>

  <div className="mb-2 flex items-center gap-3"> 
  

    <a
      href="#"
      className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
    >
  Question {index+1}    </a>







  
    <div
      className="center relative inline-block select-none whitespace-nowrap rounded-full bg-mycolor py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white"
      
    >
      <div className="mt-px">{qst.valueType.slice(0,8)}</div>
    </div>
  </div>

  <div className="flex" >
<div> 
  
  
  
  
  
   <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
{qst.questionText}
  </p></div>
<div> 
  
  
  </div>
  </div>

 
  {/**
   * 
   
  <Menu as="div" className=" p-5">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover-bg-gray-50">
                        Options
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute md:right--3 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus-outline-none text-center">
                        <div className="py-1">
                         
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-mycolor'
                                } block px-4 py-2 text-sm`}
                              >
                                <div   onClick={()=>{
                                  setselectedId({
                                    id:qst.id,
                                    questionText:qst.questionText,
                                    valueType:qst.valueType,
                                    Text:qst.Text,
                                    Title:qst.Title,
                                  })
                                  settext(true)
                                  }}            className='flex align-center'>
                                  <p data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='text-xxl font-semibold m-2' onClick={() => props.edit(true)}>Text</p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 m-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                  </svg>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-mycolor'
                                } block px-4 py-2 text-sm`}
                              >
                                <div  onClick={()=>{
                                  settitle(true)
                                  setselectedId({
                                    id:qst.id,
                                    questionText:qst.questionText,
                                    valueType:qst.valueType,
                                    Text:qst.Text,
                                    Title:qst.Title,
                                  })

                                  }}  className='flex align-center'>
                                  <p data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='text-xxl font-semibold m-2' >Title</p>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>*/}
</div>
    
  








  </div>
  
       </> 
    )):(<>
    
    <div className="flex justify-center align-center text-2xl text-mycolor py-20 ">Vide</div>
    </>)
}
  </>)
}




  


  <div className='flex space-between'>
    <>
    <button   onClick={()=>props.questionss(false)}          className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >cancel</button>
    <button     onClick={()=>props.questionss(false)}           className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >save</button>
    </> 
    
      </div>
</div>):('')
  }

        {
            Add?
            (<>
                    <form onSubmit={(e)=>handleSubmit(e)} className="Ani">
           
          <div className='flex justify-center '>
          <div className="w-full bg-white p-5 m-3 rounded-xl ">
          <span className='text-3xl font-bold text-mycolor py-5 mb-5'>Add Question</span>
      <div className="flex flex-wrap -mx-3 mb-6 mt-10">
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
            Question
          </label>
          <input name="question" className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="how much children you have?"/>
        </div>



        <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
            Descrptions
          </label>
          <textarea id="text" name="Description" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

 <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
          Details
          </label>
          <textarea id="text" name="DescriptionDetails" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        {
          /**
           * 
           * 
        
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
            Title
          </label>
          <input name="Title" className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="how much children you have?"/>
        </div>
        
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
            Text
          </label>
          <textarea id="text" name="Text" rows="4" class="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

   */
        }

   


      </div>
      <div className="w-full  ">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-first-name">
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

        </div>


      <div className="flex flex-wrap -mx-3 mb-2">
     
        <div className="w-full px-3 mb-6 mt-5 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-state">
            Type
          </label>
          <div className="relative">
            <select onChange={(e)=>handleCheckbox(e)} name="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-mycolor py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>none</option>
              <option value={"Textaria"} >Paragraph</option>
              <option value={"input"} >text</option>
              <option value={"checkbox"} >checkbox</option>


              <option value={"number"}>number</option>
            </select>
           
          </div>
        </div>
   
      </div>
  
      <div className='flex space-between'>
    <>
    <button   onClick={()=>setAdd(false)}          className={`block rounded-xl w-full bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >cancel</button>
    <button             className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >save</button>
    </> 
    
      </div>
    </div></div></form>
            </>)
            :
            (  
              
              
     ''         
     
)

        }
    

{
  assignechoices&&!update&&!Choices?
  (



    <form onSubmit={(e)=>handlechoices(e)} className="Ani">
           
    <div className='flex justify-center '>
    <div className="w-full bg-white p-5 m-3 rounded-xl ">
    <span className='text-3xl font-bold text-mycolor py-5 mb-5'>Assigne choices </span>
<div className="flex flex-wrap -mx-3 mb-6 mt-10">

  
<div className="w-full  px-3 mb-6 md:mb-0">

    
{



<>
<div>
  <div >
    <label>choice</label>
    <input
      name="choice"
      type="text"
      className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      onChange={(e) => handleInputChange(e)}
    />
    <label>related Text</label>
    <input
      name="newRelatedText"
      type="text"
      className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      onChange={(e) => handleInputChange(e)}
    />
   
  </div>
{/* You can submit the form data as needed */}
</div>
</>


}

<div className='flex space-between'>
<>
<button   onClick={()=>setassignechoices(false)}          className={`block rounded-xl w-full bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
>cancel</button>
<button             className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
>save
</button>
</> 

</div>

  </div>






</div></div>
</div></form>










  )
  :
  (null)
}

{
  Choices&&!assignechoices&&!update?
  (
<div className="relative  h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
 <div className="flex h-fit w-full items-center justify-end rounded-t-2xl p-5">
  
    <button className="text-white bg-mycolor p-2 rounded-md mr-5  sm:p-2"  onClick={() => {

 setChoices(false);
}}

            
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>

  </button>

  </div>
  <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
 








    <div class="mx-auto w-full  ">
            <header class="border-b border-gray-100 px-5 py-4">
                <div class="font-semibold text-gray-800">Manage Choices</div>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="w-full table-auto">
                    <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                      
                            <th class="p-2">
                                <div class="text-left font-semibold">choice</div>
                            </th>
                            <th class="p-2">
                                <div class="text-left font-semibold">related text</div>
                            </th>
                            <th class="p-2">
                                <div class="text-left font-semibold">action</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100 text-sm">
               {
               CheckChoices.map(el=>(




                <tr>
                        
                <td class="p-2">
                    <div class="font-medium text-gray-800">{el.choice}</div>
                </td>
          
                <td class="p-2">
                    <div class="text-left font-medium text-green-500">{el.relatedText}</div>
                </td>
                <td class="p-2">
                    <div class="flex justify-center">
                        <button                   onClick={() => {
      setselectedId({
        ...selectedId,
    valueType:''
      })


      
    
        fetch(`http://localhost:8081/api/admin/delete-choice/${selectedId.id}/${el.id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response;
          })
          .then(() => {
            fetchTamplates();
            setdeleted(true)
            setChoices(false)
          })
          .catch((error) => {
            console.error('Error:', error);
          });

}}     >
  
                            <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                        <button className="text-white bg-mycolor p-1 rounded-md ml-2   sm:p-2"  onClick={() => {
      setselectedId({
        ...selectedId,
        idchoice:el.id,
    valueType:''
      })
 setupdate(true);
 setassignechoices(false)
 setChoices(false)
}}

            
    >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

  </button>
                    </div>
                </td>
            </tr>
               ))
               }     
                  

                    </tbody>
                </table>
            </div>

        </div>

















  </div>
</div>

  )
  :
  (null)
}
{
  !Choices&&!assignechoices&&update?
  (
    <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
    <form onSubmit={(e)=>updatechoices(e)} className="Ani">
             
             <div className='flex justify-center '>
             <div className="w-full bg-white p-5 m-3 rounded-xl ">
             <span className='text-3xl font-bold text-mycolor py-5 mb-5'>Update choices </span>
         <div className="flex flex-wrap -mx-3 mb-6 mt-10">
         
           
         <div className="w-full  px-3 mb-6 md:mb-0">
         
             
         {
         
         
         
         <>
         <div>
           <div >
             <label>choice</label>
             <input
               name="choice"
               type="text"
               className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               onChange={(e) => handleInputChange(e)}
             />
             <label>related Text</label>
             <input
               name="newRelatedText"
               type="text"
               className="appearance-none block w-full bg-gray-200 text-mycolor border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               onChange={(e) => handleInputChange(e)}
             />
            
           </div>
         {/* You can submit the form data as needed */}
         </div>
         </>
         
         
         }
         
         <div className='flex space-between'>
         <>
         <button   onClick={()=>setupdate(false)}          className={`block rounded-xl w-full bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
         >cancel</button>
         <button             className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
         >save
         </button>
         </> 
         
         </div>
         
           </div>
         
         
         
         
         
         
         </div></div>
         </div></form>
    </div>

  )
  :
  (null)
}
{

!Choices&&!assignechoices&&!update&&content?
(

<div className="relative  h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
 <div className="flex h-fit w-full items-center justify-end rounded-t-2xl p-5">
  
    <button className="text-white bg-mycolor p-2 rounded-md mr-5  sm:p-2"  onClick={() => {
 setcontent(null);
}} >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>

  </button>

  </div>

  <div className="p-10">
   <div className="ql-editor relative " dangerouslySetInnerHTML={{ __html: content }} /> 
  </div>
</div>
):
(null)

}




        </>
    )
}













