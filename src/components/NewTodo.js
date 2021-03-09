import React,{ useState } from 'react';

const NewTodo = ({todos ,addTodo})=>{
    const [newTodo,setNewTodo] = useState('');
    const handleSubmit=(e)=>{
    	e.preventDefault();
    	addTodo(newTodo);
    	setNewTodo('');	
    };
    const handleChange=(e)=>{
    	setNewTodo(e.target.value);
    };
	return(
		<div>
			<form onSubmit ={handleSubmit}>
				<input placeholder="Add a new todo" onChange={handleChange} value={newTodo} />
			</form>
		</div>
		);
};
export default NewTodo;