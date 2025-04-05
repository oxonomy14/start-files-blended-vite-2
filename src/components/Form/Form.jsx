import { FiSearch } from 'react-icons/fi';
import style from '../Form/Form.module.css';

const Form = ({ addNewTodo, inputValue, setInputValue, getQuery }) => {
  const handleSubmit = e => {
    e.preventDefault(); // Запобігає перезавантаженню сторінки
    if (getQuery) {
      getQuery(inputValue); // викликається при пошуку фотографій
    } else if (addNewTodo) {
      addNewTodo(inputValue); // викликається при додаванні нової задачі
    }
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
