const TodoApp = ({ tasks, onDeleted }) => {


    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <li
                key={index} 
                className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{task}</span>
                    <button
                    className="btn btn-danger btn-sm equal-height equal-width"
                    onClick={()=>onDelete(index)}
                    >삭제
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoApp;
