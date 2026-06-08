import checked from './Assets/checked.png'
import unchecked from './Assets/unchecked.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,setTodos} )=>{
   
    const toggle = (no)=>{
        let data = JSON.parse(localstorage.getItem("todos")) // all todos get from local storage and convert string to array/js object using json.parse
        
        for(i=0; i<data.length; i++){
            if(data[i].no === no){ // means if data no is equal with user click no 
                 if(data[i].display === ""){
                    data[i].display = "line-through" // for toggle line through
            }else{
                  data[i].display === "" // for toggle line through
            }
        }
        setTodos(data); // for update data in ui
    
    }   

    return(
        <div className="Todo-items flex justify-between items-center p-2 bg-gray-100 mb-2">
           <div className="todo-items-container flex" onClick={()=>{toggle(no)}}  >
             {display === "" ? <img className="w-[30px] " src={unchecked}/> : <img className="w-[30px] " src={checked}/>}
             <span className="pl-16px font-22px">{text}</span>
            </div>

            <div className="">
                <img className="w-[10px] cursor-pointer " src={cross}/>
            </div>            
        </div>
    )
}

export default TodoItems

}
