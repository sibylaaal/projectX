'use client'


export default function SuccessAlert({message}){



    return(
<div class="p-4 mb-4 text-sm text-white rounded-lg bg-green-500 dark:text-white" role="alert">
  <span class="font-medium">Success alert!</span> {message}
</div>
    )
}