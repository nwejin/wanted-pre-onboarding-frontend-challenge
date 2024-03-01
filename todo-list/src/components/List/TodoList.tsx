import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../Store/todoSlice';
export default function TodoList() {
  const todos = useSelector((state: any) => state.todo.list);
  console.log(todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (index: number) => {
    dispatch(deleteTodo(index));
  };

  return (
    <>
      {todos.length !== 0 ? (
        <ul className="listBox">
          {todos.map((todo: string, index: number) => (
            <li key={index}>
              <div className="num">
                <span>{index + 1}</span>
              </div>
              <div className="content">{todo}</div>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'gray' }}>내용을 입력해주세요!</p>
      )}
    </>
  );
}
