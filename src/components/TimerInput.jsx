export default function TimerInput({handlerSetStep, timer}) {
    return (
    <>
        <div className="flex justify-around">
            <input className="placeholder-black p-2 rounded-md border-2 border-slate-600 w-5/12" type="text" value={timer.min} placeholder="minutes" onChange={(e)=>handlerSetStep("minutes", e.target.value)}/>
            <input className="placeholder-black p-2 rounded-md border-2 border-slate-600 w-5/12" type="text" value={timer.sec} placeholder="seconds" onChange={(e)=>handlerSetStep("seconds", e.target.value)}/>
        </div>
    </>
    )
}