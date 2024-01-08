import React, { useState } from 'react';
import  { v4 } from 'uuid';
const  AddItem = ({add}) =>{ 


    const [note, setNote] = useState('');
    function  noteChange(e){
        setNote(e.target.value);
    }

    function addItem() {
        add(function (prevNotesList) {
            if (note !== '') { 
                const updatedList = [...prevNotesList, {note,id:v4()}];
                console.log(updatedList); 
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