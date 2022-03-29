import React,{useState} from 'react'

const AddTask = ({addTask}) => {

  const getCurrentDT = ()=>{
    const dt = new Date()
    const time = dt.toTimeString()
    const isoStr = dt.toISOString()
    return isoStr.slice(0,isoStr.indexOf('T'))+'T'+time.slice(0,time.lastIndexOf(':'))
  }

  const [text,setText] = useState('')
  const [day,setDay] = useState(getCurrentDT())
  const [reminder,setReminder] = useState(false)

  const handleSubmit = (e)=>{
      e.preventDefault()
      if(text&& day){
        addTask({text,day,reminder})
        setText('')
        setDay(getCurrentDT())
        setReminder(false)
      }
        
  }

  return (
    <form action="" autoComplete="off" className='add-form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor='task'>Task</label>
            <input type='text' id='task' placeholder='Add Task' value={text}
              onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label htmlFor='day'>Date & Time</label>
            <input type='datetime-local' id='day' value={day}
              onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control-checkbox'>
            <label htmlFor='reminder'>Reminder</label>
            <input type='checkbox' id='reminder' checked={reminder}
              onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <button  className='btn' type='submit'> Save Task </button>
    </form>
  )
}

export default AddTask