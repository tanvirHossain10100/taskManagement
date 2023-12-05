/* eslint-disable no-const-assign */
import { useReducer, useState } from "react";
import "./TaskList.css";

import { reducer } from "../../Reduce/reduce";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import TaskITem from "../../components/TaskItem/TaskItem";
import localSTorage from "../../localStograge/localStograge";
const TaskList = () => {
  const [updateTodo, setUpdateTodo] = useState("");
  /*  */
  const [state, dispatch] = useReducer(reducer, localSTorage());

  /*  */
  const AddTotTodo = (e) => {
    e.preventDefault();
    const task = e.target.inputTodo.value;
    const alphabeticPattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (task === null || task === " " || !alphabeticPattern.test(task)) {
      return alert("Please add your task");
    }
    e.target.inputTodo.value = "";
    const newTodo = {
      type: "addTodo",
      payload: task,
    };
    dispatch(newTodo);
  };
  const completedBtn = (id) => {
    const updateStatus = state.tasks.reduce((acc, current) => {
      if (current.id === id) {
        current.completed = !current.completed;
      }
      acc.push(current);
      return acc;
    }, []);
    const completeTodo = {
      type: "completed",
      payload: updateStatus,
    };
    localSTorage({ tasks: updateStatus });
    dispatch(completeTodo);
  };
  const delBtn = (id) => {
    const rest = state.tasks.filter((item) => item.id !== id);
    const restTodo = {
      type: "restTodos",
      payload: rest,
    };
    localSTorage({ tasks: rest });
    dispatch(restTodo);
  };
  const updateTodoStatus = (id) => {
    const alphabeticPattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!alphabeticPattern.test(updateTodo)) {
      return alert("Please write valid task");
    }
    const updateTodoStatus = state.tasks.reduce((acc, current) => {
      if (id === current.id) {
        if (updateTodo !== "" || null) {
          current.task = updateTodo;
          setUpdateTodo("");
        } else {
          alert("Please add your todo");
        }
      }
      acc.push(current);
      return acc;
    }, []);
    //
    const updateTodoParticularTodo = {
      type: "update",
      payload: updateTodoStatus,
    };
    localSTorage({ tasks: updateTodoStatus });
    dispatch(updateTodoParticularTodo);
  };
  const enterEventForUpdateTodoText = (id, e) => {
    const alphabeticPattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!alphabeticPattern.test(updateTodo)) {
      return alert("Please write valid task");
    }
    if (e.key === "Enter") {
      const updateTodoStatus = state.tasks.reduce((acc, current) => {
        if (id === current.id) {
          if (updateTodo !== "" || null) {
            current.task = updateTodo;
            setUpdateTodo("");
          } else {
            alert("Please add your todos");
          }
        }
        acc.push(current);
        return acc;
      }, []);
      const updateTodoParticularTodo = {
        type: "update",
        payload: updateTodoStatus,
      };
      localSTorage({ tasks: updateTodoStatus });
      dispatch(updateTodoParticularTodo);
    }
  };

  return (
    <>
      <div className="TodoListPage">
        <div className="header">
          <h1>Task list</h1>
        </div>
        <div className="newTodo">
          {<TaskForm onSubmit={AddTotTodo}></TaskForm>}
        </div>
        {state?.tasks?.length > 0 ? (
          <div className="todoList">
            {state.tasks.map((item, index) => (
              <TaskITem
                index={index}
                key={item.id}
                item={item}
                completedBtn={completedBtn}
                delBtn={delBtn}
                updateTodoStatus={updateTodoStatus}
                setChildSTate={setUpdateTodo}
                currentUpdateTodo={updateTodo}
                enterEvent={enterEventForUpdateTodoText}
                reducer={{ state, dispatch }}
              ></TaskITem>
            ))}
          </div>
        ) : (
          <h2>No Task added yet</h2>
        )}
      </div>
    </>
  );
};

export default TaskList;
