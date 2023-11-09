




export default function Input({ question, functionn ,descriptionDetails,description}) {
    return (
      <>
        <p className="2xl font-semibold text-gray-700 m-5"> {question} </p>
        <p className="text-xxl text-gray-600 ml-5"> {description}</p>
        <p className="text-xxl text-gray-500 ml-5 mt-2 mb-2"> {descriptionDetails}</p>

        <input
          onChange={(e) => functionn(e)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
        />
      </>
    );
  }
  