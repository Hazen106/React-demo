import React,{ useState} from "react";

// Thành phần TodoInput cho phép người dùng thêm công việc mới
function TodoInput({ addItem}) {
    const [inputValue, setInputValue] = useState('');// State để quản lý giá trị đầu vào

    //Hàm xử lý sự kiện thay đổi đầu vào
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //Hàm xử lý thêm công việc mới
    const handleAddItem = () => { 
        if (inputValue.trim() !== ''){ //Kiểm tra đầu vào có rỗng không
            addItem(inputValue); //Gọi hàm addItem được truyền vào như một prop
            setInputValue(''); //Đặt lại trường đầu vào
        }
    };
    
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Thêm công việc"
            />
            <button onClick={handleAddItem}>Thêm</button>
        </div>
    );
}

export default TodoInput;