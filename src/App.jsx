import { useState } from 'react'


function App() {
  const [color,setColor]=useState("black");


  return (
    <>
     <div className='w-full h-screen duration-300 '
     style={{backgroundColor: color}}>
     
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0
       px-2'>

        
        
        <div className='flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-2 py-3 rounded-2xl'>
          <button className='outline-none py-1 px-4 rounded-xl' 
          style={{backgroundColor:"Red"}} onClick={()=>{setColor("Red")}}>Red</button>
           <button className='outline-none py-1 px-4 rounded-xl' 
          style={{backgroundColor:"Green"}} onClick={()=>{setColor("Green")}}>Green</button>
           <button className='outline-none py-1 px-4 rounded-xl' 
          style={{backgroundColor:"Blue"}} onClick={()=>{setColor("Blue")}}>Blue</button>
            <button className='outline-none py-1 px-4 rounded-xl text-white' 
          style={{backgroundColor:"Black"}} onClick={()=>{setColor("Black")}}>Reset</button> 
         </div>
       </div>

      
      </div> 
    </>
  )
}

export default App
