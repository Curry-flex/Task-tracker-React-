import {FaTimes} from 'react-icons/fa'

const Task =({task ,onDelete,onToggle})=>{

    return(
        <div key={task.id} className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={onToggle}>
            <h3>
                {task.task} <FaTimes style={{color:'red'}} onClick={onDelete} />
                
           </h3>
        </div>
        
        )
}

export default Task