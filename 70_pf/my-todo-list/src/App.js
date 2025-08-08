import TodoApp from "./components/TodoApp";
import TodoHeader from "./components/TodoHeader";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        // input태그에 입력한 문자열의 양 끝 공백을 제거한 결과가 ''와 같으면 return
        if (input.trim() === "") return;
        setTasks([...tasks, input.trim()]);
        // TodoApp 컴포넌트의 li에 task가 모두 출력되면 입력상자의 텍스트를 비운다.
        setInput("");
    };

    // 키보드 엔터키로 입력
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    // 삭제
    const onDelete = (index) => setTasks(tasks.filter((_, i) => i !== index));

    return (
        <div className="todo-container container">
            <TodoHeader />
            <div className="row g-2 align-items-stretch mb-4">
                <div className="col-sm-9 col-12">
                    <input
                        type="text"
                        className="form-control equal-height"
                        placeholder="할 일을 입력하세요."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="col-sm-3 col-12 d-grid">
                    <button
                        onClick={addTask}
                        className="btn btn-primary equal-height equal-height"
                    >
                        추가
                    </button>
                </div>
            </div>
            <TodoApp tasks={tasks} onDeleted={onDelete} />
        </div>
    );
}

export default App;
