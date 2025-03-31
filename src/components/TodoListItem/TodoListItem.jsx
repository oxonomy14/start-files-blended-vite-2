import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ todo, onDelete }) => {
  return (
    <>
      <h3>TodoListItem</h3>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{todo.id}
        </Text>
        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => onDelete(todo.id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
