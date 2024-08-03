import "./App.css";
import { useState } from "react";


function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const deleteHandler =(i)=>{
    let copytask = [...mainTask];
    copytask.splice(i,1)
    setmainTask(copytask)



};
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    // console.log(title)
    // console.log(desc)
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  let renderTask = <h2>No Task Avaiable</h2>;

 if(mainTask.length > 0)
 {
  renderTask= mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-2'>
    <div className="flex items-center justify-between w-2/3">
    <h5 className="text-2xl font-semibold">{t.title}</h5>
    <h6 className="text-lg font-medium">{t.desc}</h6>
    </div>
    <button
    onClick={()=>{
      deleteHandler(i)}} className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
    </li>
    ); 
  })
 }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
         T0-Do List
        
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Task"
          value={title}
          onChange={(e) =>
            //console.log(e.target.value)}//two way binding
            settitle(e.target.value)
          }
        />

        <input
          type="time"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter description"
          value={desc}
          onChange={(e) =>
            //console.log(e.target.value)}//two way binding
            setdesc(e.target.value)
          }
        />
     
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
