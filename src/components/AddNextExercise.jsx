export default function AddNextExercise({addToProgram}) {
    return (
    <>

    <div className="flex justify-around px-5 mt-7">
        <button className="border-2 border-slate-600 shadow-md bg-slate-100 block mx-auto rounded-lg px-2 py-1 mt-10 hover:bg-slate-600 hover:text-white" onClick={() => addToProgram("Exercise")}>Exercise</button>
        <button className="border-2 border-slate-600 shadow-md bg-slate-100 block mx-auto rounded-lg px-2 py-1 mt-10 hover:bg-slate-600 hover:text-white" onClick={() => addToProgram("Timer")}>Timer</button>
        <button className="border-2 border-slate-600 shadow-md bg-slate-100 block mx-auto rounded-lg px-2 py-1 mt-10 hover:bg-slate-600 hover:text-white" onClick={() => addToProgram("Finish")}>Finish</button>
    
    </div>
        </>
    )
}
