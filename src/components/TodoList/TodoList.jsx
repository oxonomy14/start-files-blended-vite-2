import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete }) => {
  return (
    <>
      <h3>TodoList</h3>
      <Grid>
        {todos.map(todo => (
          <GridItem key={todo.id}>
            <TodoListItem todo={todo} onDelete={onDelete} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
