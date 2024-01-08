const  Item = ({note}) =>{
 
    function deleteData (){


 }
 console.log(note);

    return  <div>
                <div></div>
                <input type="checkbox"></input>
                <label> {note}</label>
                <button onClick={deleteData}>X</button>
            </div>
        
           
   }
   export default Item