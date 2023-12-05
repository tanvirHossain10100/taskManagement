export const TaskForm = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="inputTodo"
          type="text"
          className="input"
          required
          placeholder="Please type your task"
        />
        <button type="submit" id="addTodoBtn">
          Add Task
        </button>
        <p></p>
      </form>
    </>
  );
};
