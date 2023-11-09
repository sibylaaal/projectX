'use client'



import { useEffect, useState } from "react";
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
  const { id: paramsId } = useParams();

  const fetchquestions = () => {
    fetch(`http://localhost:8081/api/suser/all_questions_by_template/${paramsId}`)
      .then((res) => res.json())
      .then((res) => setquestions(res));
  }
  
  useEffect(() => {
fetchquestions()
  }, [paramsId]);


  const [responses, setResponses] = useState([]);
  const [data, setdata] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
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
      type:questions[currentStep].valueType,
      question: questions[currentStep].questionText,
    };
    setResponses(newResponses);
  };
 
  

  return (
<> {
      Loading2||questions==null?
      (
<div className="loading">
<LoadingCompo/></div>

      )
      :
      ( 
         <>


        
      <div className={`line`} style={{ width: loading + `%` }}></div>
      <div className="min-h-screen flex justify-center">
        <div className={`bg-white rounded-lg p-4 sm:p-8 w-full  ${questions[currentStep].valueType=='Form' || isdone?       'sm:w-100':'sm:w-96'}  `}>
       
          <div className="px-2 w-full flex justify-center">
            <div className="w-full">
                

     
   


              {isdone ? (  
              <FormSave functionn={HandelSubmit} back={handleBacktoedit}   inputs={responses} 
                />
              ) : (
                
                (() => {
                  switch (questions[currentStep].valueType) {
                    case 'Textaria':
                      return <TextAria functionn={handleResponseChange}  question={questions[currentStep].questionText}  description={questions[currentStep].description}  descriptionDetails={questions[currentStep].descriptionDetails}     />;
                      break
                    case 'input':
                      return <Input functionn={handleResponseChange} descriptionDetails={questions[currentStep].descriptionDetails}  description={questions[currentStep].description} question={questions[currentStep].questionText} />;
                      break
                    case 'range':
                      return <Rangeers  functionn={handleResponseChange} question={questions[currentStep].questionText} min={questions[currentStep].min} max={questions[currentStep].max}/>
                      break
                    case 'checkbox':
                      return <TwinBoxesCheck functionn={handleResponseChange} question={questions[currentStep].questionText} description={questions[currentStep].description} descriptionDetails={questions[currentStep].descriptionDetails} choices={questions[currentStep].choices}   />;
                      break
                
                    case 'number':
                      return <Number functionn={handleResponseChange} question={questions[currentStep].questionText}/>;
                      break
            
                    default:
                      return null; 
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
