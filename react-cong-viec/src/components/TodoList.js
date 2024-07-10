import React from "react";
import TodoItem from "./TodoItem";

//Thành phần todo list hiển thị các công việc
function TodoList({ items, toggleComplete, removeItem}){
    return(

        <ul>
            {/*Sử dụng phương thức map để duyệt qua mỗi phần tử trong items */}
            {items.map((item,index) => ( 
                <TodoItem
                key={index}
                item={item}
                index={index}
                toggleComplete={toggleComplete}
                removeItem={removeItem}
              />
            ))}
        </ul>
    );
}

export default TodoList;