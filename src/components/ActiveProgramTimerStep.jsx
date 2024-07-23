import ActiveProgramTimerStepTimer from "./ActiveProgramTimerStepTimer"

export default function ActiveProgramTimerStep({state, min, sec, handleStepTap}) {
    return(
        <>

        <div className="flex my-4 mx-auto justify-center">

{state==="active" ? 
                        <ActiveProgramTimerStepTimer handleStepTap={handleStepTap} min={min} sec={sec}/> : 
    
                        <div >
                            {min < 10 ? `0${min}` : `${min}`}
                            {sec < 10 ? `:0${sec}` : `:${sec}`}
                        </div>
        }
        </div>


        
        </>
    )
}





