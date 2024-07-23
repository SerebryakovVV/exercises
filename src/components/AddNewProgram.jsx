import { useState } from 'react'
import AddNextExercise from './AddNextExercise';
import ExerciseInput from './ExerciseInput';
import TimerInput from './TimerInput';



export default function AddNewProgram(props) {
    
    const [program, setProgram] = useState([]);
    const [exercise, setExercise] = useState({type:"exercise", name:"", reps:""});
    const [timer, setTimer] = useState({type:"timer", min:"", sec:""});
    const [currentStep, setCurrentStep] = useState("exercise");
    const [name, setName] = useState("");

    const handlerSetStep = (field, value) => {
        if (field == "name") {
            setExercise({type:"exercise", name: value, reps: exercise.reps});
        } else if (field == "reps"){
            setExercise({type:"exercise", name: exercise.name, reps: value})
        } else if (field == "minutes") {
            setTimer({type:"timer", min:value, sec:timer.sec});
        } else if (field == "seconds") {
            setTimer({type:"timer", min:timer.min, sec:value});
        }
    }

    const addToProgram = (element) => {
        if (currentStep == "exercise") {
            setProgram([...program, exercise])
            setExercise({type:"exercise", name:"", reps:""});
        } else if (currentStep == "timer") {
            setProgram([...program, timer])
            setTimer({type:"timer", min:"", sec:""});
        }
        if (element == "Exercise") {
            setCurrentStep(()=>"exercise");
        } else if (element == "Timer") {
            setCurrentStep("timer");
        } else if (element == "Finish") {

            if (currentStep == "exercise") {
                // setProgram([...program, exercise])
                props.handleFinish(program, exercise, name);
                setExercise({type:"exercise", name:"", reps:""});
                props.setPageH();
                
            } else if (currentStep == "timer") {
                // setProgram([...program, timer])
                props.handleFinish(program, timer, name);
                setTimer({type:"timer", min:"", sec:""});
                props.setPageH();
                
            }


            
        }
    }

    return (
    <>

        <input className="mx-auto block mb-5 placeholder-black p-2 rounded-md border-2 border-slate-600 bg-slate-300 " placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        {program.map(function(el) {
            return (
                <>

                <div className="flex justify-between shadow-md border-2 rounded-lg p-2 mb-2 bg-slate-300 border-slate-600" >

                    {el.type == "exercise" ? el.name + " " + el.reps : el.min + ":" + el.sec}
                </div>

                
                </>
            )
        })}

        {currentStep == "exercise" && <ExerciseInput exercise={exercise} handlerSetStep={handlerSetStep}/>}
        {currentStep == "timer" && <TimerInput timer={timer} handlerSetStep={handlerSetStep}/>}
        <AddNextExercise addToProgram={addToProgram}/>
        
    </>
    
    )
}



// force rerender of inputs


































