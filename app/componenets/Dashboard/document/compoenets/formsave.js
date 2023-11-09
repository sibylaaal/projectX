'use client'






export default function FormSave(props) {
console.log(  props.inputs)
  return (
    <>
      <div className="flex justify-center">
        <form  onSubmit={props.functionn} className="w-full max-w-lg justify-center">
          <h1 className="text-2xl text-gray-500 font-semibold m-5 flex items-center ">
            Edit Your Choices
         
          </h1>

          {props.inputs.map((input, index) => (




  input.type!='checkbox'?
  ( <div key={index} className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2"
                  htmlFor={`grid-password-${index}`}
                >
                  {input.question}
                </label>
                <input
                disabled
                name={input.id}
                  defaultValue={input.answer}
                  className="appearance-none block w-full bg-gray-200 text-mycolor border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id={`grid-password-${index}`}
                  type={input.type=='range'? 'number':'text'}
                />
              </div>
            </div>)
  :
  (   <div  key={index}>
    <h1                  className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2"
>{input.question}</h1>
      <div key={index} className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-500 mb-4">
        <input
        checked
        disabled
          id={`bordered-radio-${index}-${index}`}
          type="radio"
          value={input.answer}
          name={`role-${index}`}
          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-mycolor dark:border-gray-600"
        />
        <label
          htmlFor={`bordered-radio-${index}-${index}`}
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {input.answer}
        </label>
      </div>
  </div>)

           
          ))}

       

          <div className="">

            <div className="flex justify-between m-5">          <button onClick={props.back} className={`p-3 text-gray-800 bg-gray-200 font-semibold rounded-tl-lg rounded-br-md btnprev  p-4 `}>prev</button>

              <button  className="shadow bg-mycolor hover:bg-mycolor focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded" type="submit">
                submit
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </>
  );
}

