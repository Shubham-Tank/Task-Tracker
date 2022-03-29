import React,{useContext} from "react";
import { CgCloseO as DeleteIcon } from "react-icons/cg";

import { TaskContext } from '../App'

function Task({ task }) {

	const {onTaskDelete, onReminder} = useContext(TaskContext)

	return (
		<div onDoubleClick={()=>onReminder(task.id)} className={(task.reminder)?"task reminder":"task"}>
			<h3>
			{task.text}
			<span
				className="deleteBtn"
				onClick={() => {
				onTaskDelete(task.id);
				}}
			>
				<DeleteIcon />
			</span>
			</h3>
			<p>{task.day}</p>
		</div>

	);
}

export default Task;
