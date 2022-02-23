import React,{useState,useEffect} from 'react';
import Task from './task';
import AddTask from './AddTask';
import Button from './Button';





const People =({people})=>{
    const [showTask,setShowTask] =useState(false)
    const[myData,setTask] = useState([])
    
    const fetchTask= async()=>{
        const res =await fetch('http://localhost:3000/task')

        const data = await res.json()
         
        return data
        
        }

    useEffect(()=>{
        const getTask = async()=>{
        const taskfromserver =await fetchTask()
        setTask(taskfromserver)
        }
         getTask()
     },[])


    

   

    const deleteTask=(id)=>{
      let remain=   myData.filter((deletedID)=> deletedID.id !==id)

        setTask(remain)
        
    } 
    
   
    
    const Toggle =(id)=>{
     
      let setreminder=  myData.map((task)=>task.id ===id ? {...task, reminder:!task.reminder} : task)
      setTask(setreminder)
      console.log("yellow")

     
    }

    const showAddTask=()=>{
        setShowTask(!showTask)
    }

    const addTask=(task)=>{
      const id = Math.floor(Math.random()*1000) + 1
      const newTask={id,...task}

      setTask([...myData, newTask])
    }
    
    
    return(
        <>
         <Button  name="Add" color="blue" showAdd={showAddTask} state={showTask} />
         {showTask && <AddTask add={addTask}/>}
         {myData.map((person)=>{
             const{id,task,day,remainder}=person
              return(
                  <div key={person.id}>
                      {task.length >0 ? (<Task task={person} onDelete={()=>deleteTask(id)} onToggle={()=>Toggle(id)}/>) :("no any task")}
                  
                  </div>
              )
         })}
        </>
        )
    
}

export default People