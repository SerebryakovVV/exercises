export default function ExerciseInput({handlerSetStep, exercise}) {
    return (
    <>
        <div className="flex justify-around">
            <input className="placeholder-black  p-2 rounded-md border-2 border-slate-600 w-5/12" type="text" value={exercise.name} placeholder="exercise" onChange={(e)=>handlerSetStep("name", e.target.value)}/>
            <input className="placeholder-black p-2 rounded-md border-2 border-slate-600 w-5/12" type="text" value={exercise.reps} placeholder="reps" onChange={(e)=>handlerSetStep("reps", e.target.value)}/>
        </div>
    </>
    )
}