
import React,
{useEffect,useState,useRef}
 from "react";

const Stapper = ({steps,currentStep}) => {
  const [newStep,setNewStep] =useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber,steps)=>{
   const newsteps = [...steps]
   let count =0;
   
   while(count < newsteps.length){
  //current step
  if (count === stepNumber){
    newsteps[count]={
      ...newsteps[count],
      highlighted:true,
      selected:true,
      completed:true,
    };
    count++;
  }
  //step completed
  else if(count < stepNumber){
    newsteps[count]={
      ...newsteps[count],
      highlighted:false,
      selected:true,
      completed:true,
    };
    count++;
  }
  // step pending
  else {
    newsteps[count]={
      ...newsteps[count],
      highlighted:false,
      selected:false,
      completed:false,
    };
    count++;
  }
   }
   return newsteps;
  };


 useEffect(()=>{
  const stepsState = steps.map((step, index)=>

   Object.assign(
    {},
    {
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    }
   )
  ); 

  stepRef.current = stepsState;
  const current = updateStep(currentStep-1, stepRef.current);
  setNewStep(current);
},[steps,currentStep]);


  const displaystaps = newStep.map((step,index)=>{
    return ( <>
      <div key ={index}
      className={ index !== newStep.length -1 ?"w-full flex items-center":"flex items-center"}>
      {/* display number*/}
      <div className={`" relative flex rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 items-center justify-center py-3 text-indigo-600 ${step.selected ? "bg-indigo-600 text-white font-bold border-indigo-600" :""}`} > {step.completed ? (<span className="text-white font-bold text-xl"> {index +1}
      </span>):(index +1)}
         </div>
         {/* display line*/}  
         <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${step.completed ?"border-indigo-500":"border-gray-300"}`}>
  
         </div>
         </div>
         
      </>)
  });


  return (
    <>
      <div className=" mx-4 p-2 flex justify-between items-center">
          {displaystaps}
          
      </div> 
      <div className="h-1 w-auto bg-slate-400  bg-opacity-10 my-1"></div>
    </>
  );
};

export default Stapper;
 