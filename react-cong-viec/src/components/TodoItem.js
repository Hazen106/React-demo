import React from "react";

//hàm chức năng khai báo thành phần, nhận các prop
function TodoItem({ item, index, toggleComplete, removeItem}) {
    return(
        <li style={{textDecoration: item.completed ? 'line-through' : 'none'}}> {/* true thì gạch ngang, không thì none */}
            {item.text} {/*Hiển thị văn bản */}
            <button onClick={() => toggleComplete(index)}> {/*Hàm được truyền tham số để thay đổi trạng thái của công việc */}
                {item.completed ? 'Undo' : 'Complete'} {/*Hoàn thành là true sẽ hiện Undo và ngược lại */}
            </button>
            <button onClick={() => removeItem(index)}>Xóa</button> {/*Xóa công việc khỏi ds vs hàm removeItem và tham số index */}
        </li>
    );
}

export default TodoItem;