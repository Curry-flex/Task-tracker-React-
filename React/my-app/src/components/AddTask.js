import React,{useState} from 'react';

const AddTask =({add})=>{

    const[task,setTask]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState('')


const submit=(e)=>{
 e.preventDefault();

 if(!task){
     alert("Fill required value")
 }
 else{
    add({task,day,reminder})
 setTask('')
 setDay('')
 setReminder(false)
 }
 

}

    return(
        <form className="add-form" onSubmit={submit}>
          <div className="form-control">
           <label>Task</label>
           <input type="text" placeholder="Add task" value={task} onChange={(e)=>setTask(e.target.value)} />
          </div>

          <div className="form-control">
           <label>Day</label>
           <input type="text" placeholder="Add day" value={day} onChange={(e)=>setDay(e.target.value)} />
          </div>

          <div className="form-control form-control-check">
           <label>Set Reminder</label>
           <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
          </div>
          <input type="submit" className="btn btn-block" />

        </form>
        
        
        )
}

export default AddTask