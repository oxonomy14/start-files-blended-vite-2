import { useEffect, useState } from 'react';
//import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import todosDB from '../todos.json';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? todosDB
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    if (!inputValue.trim()) return console.log('empty input'); //
    console.log(`значення інпуту під час сабміту форми - ${inputValue}`); // має вивести значення інпуту під час сабміту форми
    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = todoId => {
    const newData = todos.filter(todo => todo.id !== todoId);
    setTodos(newData);
  };

  return (
    <>
      <Form
        addNewTodo={addNewTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </>
  );
};

export default Todos;
