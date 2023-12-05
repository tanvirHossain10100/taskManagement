import localSTorage from "../localStograge/localStograge";

export const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      const newTodoValue = action.payload;
      // action.payload.target.inputTodo.value = "";
      const newTodods = {
        id: Date.now(),
        task: newTodoValue,
        completed: false,
      };
      localSTorage({
        ...state,
        tasks: [...state.tasks, newTodods],
      });
      return {
        ...state,

        tasks: [...state.tasks, newTodods],
      };
    }
    case "completed": {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }
    case "update": {
      return { tasks: action.payload };
    }
    case "restTodos": {
      return { tasks: action.payload };
    }
  }
};
