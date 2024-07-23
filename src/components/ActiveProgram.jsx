import { useState } from 'react'

import ActiveProgramExerciseStep from "./ActiveProgramExerciseStep"
import ActiveProgramTimerStep from "./ActiveProgramTimerStep"

export default function ActiveProgram({program, setPage}) {

    const [currentStep, setCurrentStep] = useState(0);

    const handleStep = () => {
        setCurrentStep(()=>currentStep+1);
        if (currentStep >= program.steps.length-1) {
            setPage("ProgramList");
        }
    }

    return (
    <>
    {program.steps.map((el, index)=>{

        let state;
        if (index < currentStep) {
            state = "done";
        } else if (index == currentStep) {
            state = "active";
        } else {
            state = "todo";
        }


        if (el.type === "exercise") {
            return(
                <ActiveProgramExerciseStep handleStepTap={handleStep} state={state} name={el.name} reps={el.reps}/>
            )
        } else {
            return(
                <ActiveProgramTimerStep handleStepTap={handleStep} state={state} min={el.min} sec={el.sec}/>
        )
        }
    })}

    <button  className="border-2 border-slate-600 shadow-md bg-slate-100 block mx-auto rounded-lg px-2 py-1 mt-10 hover:bg-slate-600 hover:text-white" onClick={()=>setPage("ProgramList")}>Finish</button>

    </>
    )
}