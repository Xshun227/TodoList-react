import React, { useState } from 'react';
import List from './components/List';
import AddItem from './components/AddItem';
import "./index.css";


const  TodoList = () =>{
    const [data, setData] = useState([]);
    // console.log(data); 
    return (


        <div className='todolist'>
            <div className='title' >
                <h1>Todo List</h1>
                <span>Add things to do</span>
            </div>
                <List listData={data} 
                      changeData={setData} 
                />
            
                <AddItem add={setData}/>
          
        </div>
    )
     
        
}
export default TodoList