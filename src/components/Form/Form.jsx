import { FiSearch } from 'react-icons/fi';
import style from '../Form/Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault(); // Запобігає перезавантаженню сторінки
    if (!inputValue.trim()) {
      window.alert('Дайте назву задачі');

      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <h2>Form</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default Form;
