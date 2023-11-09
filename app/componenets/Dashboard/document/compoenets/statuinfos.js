
'use client'

import { useState } from "react";


export default function StatusInfos() {
    const [loading, setloading] = useState(1);
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [isdone, setisdone] = useState(false);
    const [DataCase, setDataCase] = useState({
      status:"PENDING",
      data1: "",
      data2: "",
      data3: "",
      dat4:"",
    });
    const [dissbtn, setdissbtn] = useState(true);
    const changetext=(e)=>{
      setDataCase(
          {
             ...DataCase,
          data3:e.target.value  
          }
         
      )
    }
    const handleNext = () => {
      if (step1) {
        if (DataCase.data1 !== "") {
          setloading(20);
          setstep1(false);
          setstep2(true);
          setdissbtn(false);
        }
      } else if (step2) {
        if (DataCase.data2 !== "") {
          setloading(50);
          setstep2(false);
          setstep3(true);
          setdissbtn(false);
        }
      } else if (step3) {
        if (DataCase.data3 !== "") {
          setloading(100);
          setstep3(false);
          setisdone(true);
  
          setdissbtn(false);
  
        }
      }
    };
  
    const handlePrev = () => {
      if (step2) {
        setloading(1);
        setstep1(true);
        setstep2(false);
        setdissbtn(true);
      } else if (step3) {
        setloading(20);
        setstep2(true);
        setstep3(false);
        setdissbtn(false);
      } else if (isdone) {
        setloading(50);
        setstep3(true);
        setisdone(false);
        setdissbtn(false);
      }
    };
  
    const handleRadioChange = (event) => {
      const { name, value } = event.target;
      setDataCase({
        ...DataCase,
        [name]: value
      });
    };
  
    return (
      <>
        <div className="min-h-screen flex justify-center">
          <div className="bg-white rounded-lg p-4 sm:p-8 w-full sm:w-96">
         
            <div className="px-2 w-full flex justify-center">
              <div className="w-full">
                  
                {step1 ? (
                  <>
                    <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
              <div className="text-2xl text-gray-800 font-bold">Lorem Ipsum lara lorem</div>
              <p >text to test the desgine and eveything </p>
  
            </label> <div className="w-full grixx">
                    <div className="inline-block radio">
                      <input
                        name="data1"
                        type="radio"
                        id="B1"
                        hidden="hidden"
                        value="Private"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="B1"
                        className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 mr-10"
                      >
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
  
  
  <p className="iconL">Private</p>
                      </label>
                    </div>
                    <div className="inline-block radio">
                      <input
                        name="data1"
                        type="radio"
                        id="D1"
                        hidden="data"
                        value="business"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="D1"
                        className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
                      >
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
  <p className="iconL">business </p>
   </label>
                    </div>
                  </div>
                  </>
                 
                ) : (
                  ""
                )}
  
                {step2 ? (
                  <>
                      <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
              <div className="text-2xl text-gray-800 font-bold">Lorem Ipsum lara lorem</div>
              <p>text to test the desgine</p>
  
            </label>   <div className="w-full grixxx" >
  
  
  
  
  
  
  
  
             {
             DataCase.data1=='Private'?
              (<>
              
              
              
              
              <div className="inline-block radio">
                     <input
                       name="data2"
                       type="radio"
                       id="B1"
                       hidden="hidden"
                       value="Residence"
                       onChange={handleRadioChange}
                     />
                     <label
                       htmlFor="B1"
                       className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 mr-10"
                     >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
  
  
  <p className="iconL">Resisdence </p>
                     </label>
                   </div>
  
                   <div className="inline-block radio">
                     <input
                       name="data2"
                       type="radio"
                       id="D1"
                       hidden="hidden"
                       value="family"
                       onChange={handleRadioChange}
                     />
                     <label
                       htmlFor="D1"
                       className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
                     >
  
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
  
  
  <p className="end">Family </p>
  
  </div>
  
  
  
                     </label>
                   </div>
  
  
              
              
              
              </>)
              :
              (<>
  
  
  
  <div className="inline-block radio">
                     <input
                       name="data2"
                       type="radio"
                       id="B1"
                       hidden="hidden"
                       value="Mybusiness"
                       onChange={handleRadioChange}
                     />
                     <label
                       htmlFor="B1"
                       className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 mr-10"
                     >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
  
  
  <p className="iconL"> My business </p>
                     </label>
                   </div>
  
                   <div className="inline-block radio">
                     <input
                       name="data2"
                       type="radio"
                       id="D1"
                       hidden="hidden"
                       value="trade"
                       onChange={handleRadioChange}
                     />
                     <label
                       htmlFor="D1"
                       className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
                     >
  
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
  </svg>
  
  
  
  <p className="end">Trade </p>
  
  </div>
  
  
  
                     </label>
                   </div>
  
  
  
              
              
              
              
              </>)
             }
  
  
  
  
                   <div className="inline-block radio m">
                     <input
                       name="data2"
                       type="radio"
                       id="D3"
                       hidden="hidden"
                       value="other"
                       onChange={handleRadioChange}
                     />
                     <label
                       htmlFor="D3"
                       className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
                     >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
  
  
  
  
  
  
  
  
  
  <p className="iconL">Other </p>                   </label>
                   </div>
                 </div>
                  </>
                
                ) : (
                  ""
                )}
  
                {step3 ? (
                  <>
                      <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
              <div className="text-2xl text-gray-800 font-bold">Lorem Ipsum lara lorem</div>
              <p>text to test the desgine</p>
            </label><div className="w-full "    >
                
  
  
  
  <textarea onChange={(e)=>changetext(e)} id="message" rows="8" cols={30} name="data3"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  
  
  
  
                  </div></>
                    
                ) : (
                  ""
                )}
  
                {isdone ? (
                 <>
                     <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2 text-center">
              <div className="text-2xl text-gray-800 font-bold">Lorem Ipsum lara lorem</div>
            </label>
                 <div className="flex justify-center items-center py-5 ">
                 <div
                   className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                   role="status"
                 >
                   <span
                     className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                   >Loading...</span>
                 </div>
               </div>
               </>
                ) : (
                  ""
                )}
              </div>
            </div>
  
            <div className="flex justify-center mt-4 space-x-4">
              {
                  isdone?
                  ('')
                  :
  
  (
  <><button onClick={handlePrev} className={`text-gray-800 bg-gray-200 font-semibold rounded-tl-lg rounded-br-md btnprev p-4 ${dissbtn ? 'opacity-50 cursor-not-allowed' : ''}`}>prev</button>
              <button onClick={handleNext} className={`text-gray-800 bg-gray-200 font-semibold rounded-tl-lg rounded-br-md nextprev p-4 ${dissbtn ? 'opacity-50 cursor-not-allowed' : ''}`}>next</button>
           </>
   
  )}
      </div>
          
          </div>
        </div>
      </>
    );
  }
  