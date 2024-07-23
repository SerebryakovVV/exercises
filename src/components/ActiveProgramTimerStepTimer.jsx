import { useState, useEffect} from "react"

export default function ActiveProgramTimerStepTimer({min, sec, handleStepTap}) {
    
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);

    useEffect(()=>{
        if (minutes <= 0 && seconds <= 0) {
            handleStepTap();
            return;
        }
        const intervalId = setInterval(()=>{
            if (seconds > 0) {
                setSeconds((s)=>s-1);
             } else {
                setMinutes((m)=>m-1);
                setSeconds(59);
             }
        }, 10);
        return ()=>clearInterval(intervalId);
    }, [seconds]);

    return(
        <>
        <div className="scale-125">
            {minutes < 10 ? `0${minutes}` : `${minutes}`}
            {seconds < 10 ? `:0${seconds}` : `:${seconds}`}
        </div>
        </>
    )
}







