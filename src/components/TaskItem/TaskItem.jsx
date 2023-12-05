/* eslint-disable react/prop-types */
import "./TaskITem.css";
import { useState } from "react";

const TaskITem = ({
  item: { id, completed, task },
  completedBtn,
  delBtn,
  updateTodoStatus,
  setChildSTate,
  enterEvent,
  index,
}) => {
  const [upDateInputToggle, setUpdateINputToggle] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const upDateInput = () => {
    setUpdateINputToggle(true);
    setUpdateText(task);
  };
  const onchange = (e) => {
    const todo = e.target.value;

    console.log(todo);
    setChildSTate(todo);
    setUpdateText(todo);
  };
  return (
    <>
      <div className="todoItem">
        <ul className="todoItemUl">
          <li>{index + 1}:</li>
          <li className="todoTask">
            {completed ? (
              <del>
                <span className="task">{task}</span>
              </del>
            ) : upDateInputToggle ? (
              <input
                autoFocus
                className={`inputFocus ${
                  upDateInputToggle ? "leftTransition" : ""
                }`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setUpdateINputToggle(false);
                    enterEvent(id, e);
                    setUpdateText("");
                  }
                }}
                type="text"
                id="update"
                onChange={onchange}
                value={updateText}
                placeholder="Write to update your todo"
              />
            ) : (
              <span
                className={`task ${upDateInputToggle ? "" : "leftTransition"} `}
              >
                {task}
              </span>
            )}
          </li>

          <li onClick={() => completedBtn(id)}>
            <button className={completed ? "notClicked" : "click"}>
              &#10003;
            </button>
          </li>
          <li onClick={() => delBtn(id)}>
            <button>&#10060;</button>
          </li>

          {upDateInputToggle ? (
            <>
              <span onClick={() => setUpdateINputToggle(false)}>
                <button
                  // disabled={completed ? true : false}
                  className="updateBtn"
                  onClick={(e) => updateTodoStatus(id, e)}
                >
                  update
                </button>
              </span>
            </>
          ) : (
            <li
              type="button"
              disabled
              onClick={() => {
                setUpdateText("");
                upDateInput();
              }}
            >
              &#9874;
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
export default TaskITem;
