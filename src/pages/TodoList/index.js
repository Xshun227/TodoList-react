import React, { useState } from 'react';
import List from './components/List';
import AddItem from './components/AddItem';


const  TodoList = () =>{
    const [data, setData] = useState([]);
    console.log(data); // 确保更新后的列表正确


    return (


        <div>
            <div>
                <h1>TodoList</h1>
                <span>Add things to do</span>
            </div>
                <List listData={data}/>
            <div>
                <AddItem add={setData}/>
            </div>
        </div>
    )
     
        
}
export default TodoList