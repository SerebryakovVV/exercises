import { useState } from 'react'

import ActiveProgram from './components/ActiveProgram';
import AddNewProgram from './components/AddNewProgram';
import ProgramList from './components/ProgramsList';

function App() {
  const [exercisesDB, setExercisesDB] = useState(JSON.parse(localStorage.getItem("main")));
  const [page, setPage] = useState("ProgramList"); //AddNewProgram, ActiveProgram
  const [program, setProgram] = useState();



  const handleFinish = (pr, ex, name) => {

    let oldDB = JSON.parse(localStorage.getItem("main"));
    let newSteps = [...pr, ex];

    let newEntry = {name:name, steps:newSteps};



    localStorage.setItem("main", 

      JSON.stringify(
        [...oldDB, newEntry
        ]
    
      )
      )

    
    console.log(newEntry);
    setExercisesDB(JSON.parse(localStorage.getItem("main")));
  }

  const handleListSelection = (el) => {
    setProgram(el);
    setPage("ActiveProgram");
  }

console.log(program);
  return (
    <>
      <div className="h-screen bg-slate-200" >
        <div className="mx-auto pt-3 px-6 h-screen max-w-lg bg-slate-400">
          {page === "ActiveProgram" && <ActiveProgram program={program} setPage={setPage}/>}
          {page === "AddNewProgram" && <AddNewProgram setPageH={()=>setPage("ProgramList")} handleFinish={handleFinish}/>}
          {page === "ProgramList" && <ProgramList exercisesDB={exercisesDB} handleListSelection={handleListSelection} setPage={setPage}/>}
        </div>
      </div>
    </>
  )
}

export default App
