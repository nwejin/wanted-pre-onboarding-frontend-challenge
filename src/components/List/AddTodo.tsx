import { useState } from 'react';
import { addTodo } from '../../Store/todoSlice';

import { useDispatch } from 'react-redux';

export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch(); // 함수 호출 시 실행

  // redux todolist 저장하기
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
    console.log(input);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name=""
          id=""
          value={input}
          placeholder="텍스트를 입력해주세요"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
