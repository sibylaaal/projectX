









export default function PersonalInfos(){



    return(
        <div className
    
        =" w-full">  <h1 className='text-4xl font-semibold text-gray-700'>Title Lorem Ipsum</h1>
            <div>
                <div className
                
                ="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Full Name</div>
                <div className
                
                ="flex flex-col md:flex-row">
                    <div className
                    
                    ="w-full flex-1 mx-2 svelte-1l8159u">
                        <div className
                        
                        ="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input placeholder="First Name" className
                            
                            ="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                    </div>
                    <div className
                    
                    ="w-full flex-1 mx-2 svelte-1l8159u">
                        <div className
                        
                        ="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input placeholder="Last Name" className
                            
                            ="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                    </div>
                </div>
                <div className
                
                ="flex flex-col md:flex-row">
                    <div className
                    
                    ="w-full mx-2 flex-1 svelte-1l8159u">
                        <div className
                        
                        ="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Username</div>
                        <div className
                        
                        ="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input placeholder="Just a hint.." className
                            
                            ="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                    </div>
                    <div className
                    
                    ="w-full mx-2 flex-1 svelte-1l8159u">
                        <div className
                        
                        ="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
                        <div className
                        
                        ="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input placeholder="jhon@doe.com" className
                            
                            ="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                    </div>
                </div>
            </div>
   
        </div>
    
    )
}