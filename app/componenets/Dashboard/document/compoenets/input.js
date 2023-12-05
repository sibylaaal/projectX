




export default function Input({ question, functionn ,descriptionDetails,description,value}) {
    return (
      <>
      <div className="w-full">
        <p className="text-3xl font-semibold text-gray-700 mt-5 mb-2"> {question} </p>
        <p className="text-xxl text-gray-600 mb-2"> {description}</p>
        <div class="flex items-center px-2 mb-2 py-4  text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only ">Info</span>
  <div>
    <span class="font-medium"> details!</span> {descriptionDetails}
  </div>
</div>

        <input
        value={value}
          onChange={  (e) => functionn(e)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
        /></div>
      </>
    );
  }
  