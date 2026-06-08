import checked from './Assets/checked.png'
import unchecked from './Assets/unchecked.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text} )=>{

    return(
        <div className="Todo-items flex justify-between items-center p-2 bg-gray-100 mb-2">
           <div className="todo-items-container flex" >
             <img className="w-[30px] " src={checked}/>
             <img className="w-[30px]" src={unchecked}/>
             <span className="pl-16px font-22px">{text}</span>
            </div>

            <div className="">
                <img className="w-[10px] cursor-pointer " src={cross}/>
            </div>            
        </div>
    )
}

export default TodoItems
