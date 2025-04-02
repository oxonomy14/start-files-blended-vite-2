import { useEffect, useState } from 'react';
//import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import todosDB from '../todos.json';
import EditForm from '../components/EditForm/EditForm';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? todosDB
  );
  const [inputValue, setInputValue] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Додаємо todo

  const addNewTodo = inputValue => {
    if (!inputValue.trim()) {
      window.alert('Дайте назву задачі');

      return;
    }

    if (!inputValue.trim() || fintTodo(inputValue)) {
      window.alert('Така назва вже є');
      return;
    }

    console.log(`значення інпуту під час сабміту форми - ${inputValue}`); // має вивести значення інпуту під час сабміту форми

    const newTodo = {
      /*id: crypto.randomUUID(),*/
      id: nanoid(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Функція видалення

  const handleDeleteTodo = todoId => {
    const newData = todos.filter(todo => todo.id !== todoId);
    setTodos(newData);
  };

  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setCurrentTodo('');
    setIsEditing(false);
  };

  const updateTodo = text => {
    if (!text.trim() || fintTodo(text)) {
      window.alert('Така назва вже є');
      return;
    }

    const editData = todos.map(todo =>
      todo.id === currentTodo.id ? { ...todo, text } : todo
    );

    setTodos(editData);

    console.log('Оновили текст в todo:', text);
  };
  //  Функція перевірки унікальності todo

  const fintTodo = text => {
    const compare = todos.some(
      todo => todo.text.toLowerCase() === text.toLowerCase()
    );
    return compare;
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
        />
      ) : (
        <Form
          addNewTodo={addNewTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      ) : (
        <div style={{ textAlign: 'center' }}>There are no any todos ....</div>
      )}
    </>
  );
};

export default Todos;
