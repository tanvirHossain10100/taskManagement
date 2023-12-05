import localSTorage from "../localStograge/localStograge";

export const reducer = (state, action) => {
  console.log(state, action.type);
  switch (action.type) {
    case "addTodo": {
      const newTodoValue = action.payload;
      console.log(newTodoValue);
      // action.payload.target.inputTodo.value = "";
      const newTodods = {
        id: state.length + 1,
        task: newTodoValue,
        completed: false,
      };
      localSTorage([...state, newTodods]);
      return [
        ...state,
        {
          id: state.length + 1,
          task: newTodoValue,
          completed: false,
        },
      ];
    }
    case "completed": {
      return action.payload;
    }
    case "update": {
      return action.payload;
    }
    case "restTodos": {
      return action.payload;
    }
    case "toggle": {
      ("");
    }
  }
};
