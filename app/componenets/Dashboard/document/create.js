'use client'



import { useContext, useEffect, useState } from "react";
  import { useParams, useRouter } from "next/navigation";
import PersonalInfos from "./compoenets/personalinfos";
import TwinBoxesCheck from "./compoenets/twinchwckboxes";
import TreeCheckBooks from "./compoenets/treecheckboes";
import TextAria from "./compoenets/textarea";
import FormSave from "./compoenets/formsave";
import Input from "./compoenets/input";
import Number from "./compoenets/number";
import { useDispatch, useSelector } from "react-redux";
import {Createdocument} from "../../redux/actions/documents"
import LoadingCompo from "../../home/loading";
import Rangeers from "./compoenets/range";

export default function CreateCase() {
  const dispatch=useDispatch()
const router = useRouter();

  const [loading, setLoading] = useState(1);
  const [questions, setquestions] = useState(null);
  const { id: paramsId} = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const fetchquestions = () => {
    fetch(`http://localhost:8081/api/suser/suser_find_questions_by_template/${paramsId[0]}`)
      .then((res) => res.json())
      .then((res) => setquestions(res));
  }
  
  useEffect(() => {
fetchquestions()
  }, []);


  const [responses, setResponses] = useState([]);
  const [data, setdata] = useState({});
  const [isdone, setIsDone] = useState(false);
  const [Loading2, setLoading2] = useState(false)
  const [dissbtn, setDisableBtn] = useState(true);
  const HandelSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
   

    dispatch(Createdocument(data))
    setLoading2(true)



  }


  const handleNext = () => {

    fetch('http://localhost:8081/api/suser/updateValue', {
      method: 'PUT',
      body: JSON.stringify(
        {
           documentId:paramsId[1],
          questionId:questions[currentStep].id,
          value:responses[currentStep].answer,
          selectedChoiceId:responses[currentStep].choiceid
        
        
        }
        
        ),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {

      });



    if (currentStep < questions.length - 1) {
      if (responses[currentStep] && responses[currentStep].answer !== '') {



        setCurrentStep((prevStep) => prevStep + 1);
        setLoading(((currentStep + 2) / questions.length) * 100);
      }
      setDisableBtn(false);
    } else {
      setLoading(100);
      setIsDone(true);
      setDisableBtn(false);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setLoading((currentStep / questions.length) * 100);
      setCurrentStep(currentStep - 1);
      setDisableBtn(false);
    } else if (isdone) {
      setLoading(((currentStep + 1) / questions.length) * 100);
      setIsDone(false);
      setDisableBtn(false);
    }
  };
const handleBacktoedit=()=>{
  setIsDone(false)
}
  const handleResponseChange = (event) => {
    const step = currentStep;
    const newResponses = [...responses];
    newResponses[step] = {
      id: questions[currentStep].id,
      answer: event.target.value,
      choiceid:questions[currentStep].valueType.length>10? event.target.id:null,
      type:questions[currentStep].valueType.length>10? 'checkbox':questions[currentStep].valueType,
      question: questions[currentStep].questionText,
    };
    setResponses(newResponses);
    
  };
 

  return (

    
<> {
      Loading2||questions==null?
      (

<LoadingCompo/>

      )
      :
      ( 
         <>


            
      <div className={`line`} style={{ width: loading + `%` }}></div> 
      
      <div className="flex justify-end m-5">
  {/* Your column content goes here */}

  <button className="text-gray-800 bg-gray-200 hover:bg-green-400 hover:text-white font-semibold rounded-md relative p-4"  style={{ alignSelf: 'flex-end' }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hover:text-white h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
    </svg>
  </button>
</div>

  
      <div className=" flex justify-center sm:mt-10">      
{
  isdone?
  (null)
  :
  (  <ol class="relative border-s bg-mycolor border-gray-200  ol   dark:border-gray-700 hidden sm:block items-start mt-10">
 
        {
          responses.length>0?
          (  responses.map((response,index)=>(   <li class="relative mb-6 sm:mb-0 m-4">
        <div key={index} class="flex items-center">
            <div class={`z-10 flex items-center justify-center w-6 h-6  ${response.answer!=""? "bg-green-400 text-white":"bg-gray-200" }  rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`} >
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class={`hidden sm:flex w-full ${response.answer!=""? "bg-green-400 transition duration-500 ease-in-out":"bg-gray-200" } h-0.5 dark:bg-gray-700`}></div>
        </div>
   <div style={{marginRight:"10vw"}}  class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 text-white dark:text-white">Question {index+1} </h3>
            <p class="text-base text-white font-normal text-gray-500 dark:text-gray-400">{response.answer}</p>
        </div> 
    </li>
          ))   
           )
          :
          (null)
        }
 
   
</ol>
)
}
    

  


        <div className={`  rounded-lg p-4 sm:p-8 w-full topbox  ${questions[currentStep].valueType=='Form' || isdone?       'sm:w-100':'sm:w-96'}  `}>


          <div className="px-2 w-full flex justify-center">



            <div className="w-full">
                

     
   


              {isdone ? (  
              <FormSave documentId={paramsId[1]} templateid={paramsId[0]}    templa functionn={HandelSubmit} back={handleBacktoedit}   inputs={responses} 
                />
              ) : (
                (() => {
                  if(questions[currentStep].valueType.length>10){

  return <TwinBoxesCheck value={responses[currentStep]? responses[currentStep].answer:''} functionn={handleResponseChange} question={questions[currentStep].questionText} description={questions[currentStep].description} descriptionDetails={questions[currentStep].descriptionDetails} choices={questions[currentStep].valueType}   />

                  }else{
                           switch (questions[currentStep].valueType) {
                    case 'Textaria':
                      return <TextAria value={responses[currentStep]? responses[currentStep].answer:''} functionn={handleResponseChange}  question={questions[currentStep].questionText}  description={questions[currentStep].description}  descriptionDetails={questions[currentStep].descriptionDetails}     />;
                      break
                    case 'input':
                      return <Input value={responses[currentStep]? responses[currentStep].answer:''} functionn={handleResponseChange} descriptionDetails={questions[currentStep].descriptionDetails}  description={questions[currentStep].description} question={questions[currentStep].questionText} />;
                      break
                    case 'range':
                      return <Rangeers value={responses[currentStep]? responses[currentStep].answer:''}  functionn={handleResponseChange} question={questions[currentStep].questionText} min={questions[currentStep].min} max={questions[currentStep].max}/>
                      break
              
                
                    case 'number':
                      return <Number value={responses[currentStep]? responses[currentStep].answer:0} functionn={handleResponseChange}  description={questions[currentStep].description} descriptionDetails={questions[currentStep].descriptionDetails} question={questions[currentStep].questionText}/>;
                      break
            
                    default:
                      return null; 
                  }
                  }
           
                })()





















              )}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            {
                isdone?
                (
''                )
                :

(
<>
<button onClick={handlePrev} className={`text-gray-800 bg-gray-200 font-semibold rounded-tl-lg rounded-br-md btnprev p-4 ${dissbtn ? 'opacity-50 cursor-not-allowed' : ''}`}>prev</button>
 <button onClick={handleNext} className={`text-gray-800 bg-gray-200 font-semibold rounded-tl-lg rounded-br-md nextprev p-4 ${dissbtn ? 'opacity-50 cursor-not-allowed' : ''}`}>next</button>
       
         </>
 
)}
    </div>
        
        </div>
      </div>
    </>)
    }</>
   
  
  );
}
