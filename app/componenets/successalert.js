'use client'


export default function SuccessAlert({message}){



    return(
<div className="p-4 mb-4 text-sm text-white rounded-lg bg-green-500 dark:text-white" role="alert">
  <span className="font-medium">Success alert!</span> {message}
</div>
    )
}