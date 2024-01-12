import React, { useState } from 'react';
import List from './components/List';
import AddItem from './components/AddItem';
// import Progress from './components/Progress';


const  TodoList = () =>{
    const [data, setData] = useState([]);
    // console.log(data); 
    return (


        <div>
            <div>
                <h1>TodoList</h1>
                <span>Add things to do</span>
            </div>
                {/* <Progress/> */}
                <List listData={data} 
                      changeData={setData} 
                      
                />
            <div>
                <AddItem add={setData}/>
            </div>
        </div>
    )
     
        
}
export default TodoList