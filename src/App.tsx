import React from 'react';
import AddTodo from '../src/components/List/AddTodo';
import Title from '../src/components/Title';
import { Provider } from 'react-redux';
import store from './Store/Store';
import './styles/TodoList.scss';
import TodoList from '../src/components/List/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <Title />
        <div className="subContainer box">
          <div className="addTodoBox">
            <AddTodo />
          </div>
          <div className="todoListBox">
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
