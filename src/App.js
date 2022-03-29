import React,{ useState} from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask"

export const TaskContext = React.createContext()

function App() {
	const [tasks, setTasks] = useState([]);
	const [showAddTask, setShowAddTask] = useState(false)
	
	// useEffect(()=>{
	// 	const fetchTasks = async ()=>{
	// 		const res = await fetch('http://localhost:5000/tasks')
	// 		const data = await res.json()
	// 		setTasks(data)
	// 	}
	// 	fetchTasks()

	// },[])

	const generateId = (text) => {
		var hash = 0, i, chr;
		if (text.length === 0) return hash;
		for (i = 0; i < text.length; i++) {
			chr   = text.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; 
		}
		return hash;
	};
	
	
	const toggleReminder = async (id) =>{
		
// 		const task = tasks.find((task)=>task.id===id)

		// await fetch(`http://localhost:5000/tasks/${id}`, {
		// 	method: "PUT",
		// 	headers: {
		// 		"Content-Type" : "application/json"
		// 		},
		// 		body: JSON.stringify(
		// 		{
		// 			...task,
		// 			reminder: !task.reminder
		// 		}
		// 		)
		// })

		setTasks(tasks.map((task)=>(task.id===id)
		?{...task,reminder : !task.reminder}
		:task
		))
	}
	
	const handleTaskDelete = async (id) => {

		// await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})

		setTasks(tasks.filter((task) => task.id !== id));
	};

	

	const addTask = async (task)=>{

		const day = new Date(task.day)
		const monthStr = day.toString().slice(4,7)
		const hours = day.getHours()
		const time = `${ hours > 12 ? hours-12 : hours }:${ day.getMinutes() }${ hours>12 ? 'pm' : 'am' }`
		const newTask = {
			...task,
			id: generateId(task.text),
			day:`${monthStr} ${day.getDate()}th at ${time}`
		}


		// await fetch(`http://localhost:5000/tasks`,{
		// 	method:'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body:JSON.stringify(newTask)
		// })

		setTasks([...tasks, newTask])
	}
	

	return (
		<div className="container">

		<Header 
			toggleAddTask = {() =>{
				setShowAddTask(!showAddTask)
			}}
			showAddTask={showAddTask}
		/>
		{ showAddTask && <AddTask addTask={addTask} />}

		<TaskContext.Provider value={{ onTaskDelete : handleTaskDelete, onReminder:toggleReminder }}>
			<TaskList tasks={tasks} />
		</TaskContext.Provider>
		</div>
	);
}
	
	
	export default App;
	
