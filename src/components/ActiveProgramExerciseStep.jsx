export default function ActiveProgramExerciseStep({state, name, reps, handleStepTap}) {
    return(
        <>
        <div className={"flex justify-between shadow-md border-2 rounded-lg p-2 mb-2 bg-slate-300 " + (state==="todo"?
                " border-slate-600": state==="active"?"border-yellow-400 scale-105": 
                "border-green-700" ) } 
                onClick={state==="active"?()=>handleStepTap():null}>
            
        <div>{name}</div>
            <div>{reps}</div>
        </div>



     
        </>
    )
}