export default function ProgramList({exercisesDB, handleListSelection, setPage}) {
    return (
    <>
    {exercisesDB.map((el)=>{
        return(
            <div className="shadow-md text-white hover:text-black border-2 border-slate-600 rounded-lg p-2 mb-2 bg-slate-600 hover:bg-slate-300" onClick={()=>handleListSelection(el)}>
                {el.name}
                
                </div>
        )
    })}
    <button className="border-2 border-slate-600 shadow-md bg-slate-100 block mx-auto rounded-lg px-2 py-1 mt-10 hover:bg-slate-600 hover:text-white" onClick={()=>setPage("AddNewProgram")}>Add</button>
    </>
    )
}

