import React, { useState } from 'react';
import  { v4 } from 'uuid';
const  AddItem = ({add}) =>{ 


    const [note, setNote] = useState('');
    const [Index, setIndex] = useState(0);

    function  noteChange(e){
        setNote(e.target.value);
    }

    function addItem() {
        add(function (prevNotesList) {
            //新增list
            if (note !== '') { 
                const updatedList = [...prevNotesList, {note,id:v4(),Checked:false,originalOrder:Index}];
                console.log(updatedList); 
                setIndex(Index + 1);
                return updatedList;
               
            } else {
                return prevNotesList;
            }
        });
        
        setNote('');
    }
    
    return (
        <div>
            <input type="text" value={note} onChange={noteChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
           
   };
   export default AddItem