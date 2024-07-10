import React, {useState} from "react";
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// Thành phần App là thành phần chính chứa state và logic
function App(){
  const [items, setItems] = useState([]);// State để quản lý danh sách công việc

  //Hàm thêm công việc mới vào danh sách
  const addItem = (text) => {
    const newItem = {text, completed: false};//Đối tượng công việc mới và trạng thái hoàn thành ban đầu là false
    setItems([...items,newItem]);//Cập nhật state items với công việc mới
  };

  //Hàm thay đổi trạng thái của công việc
  const toggleComplete = (index) => {
    const newItems = [...items];//Tạo bản sao mảng items
    newItems[index].completed = !newItems[index].completed;// Thay đổi trạng thái hoàn thành
    setItems(newItems); //Cập nhật state items
  };

  //Hàm xóa công việc khỏi danh sách
  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);//Tạo ra mảng mới không có không có phần tử ở vị trí index
    setItems(newItems);//Cập nhật state items
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách công việc</h1>
        <TodoInput addItem={addItem} /> {/*truyền hàm addItem như một prop */}
        {/*Truyền danh sách công việc items và 2 hàm như prop */}
        <TodoList
          items={items}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
        />
      </header>
    </div>
  );
}

export default App;