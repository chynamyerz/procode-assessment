import { FC } from 'react';
import { AddItemForm, Item } from '../../components';
import './Todo.css';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/todo/todoSlice';
import { Item as TodoItem } from '../../store/todo/types';

export const Todo: FC = () => {
  const items = useSelector((state: RootState) => state.todo.items);
  const dispatch = useDispatch();

  const onAdd = (item: TodoItem) => {
    dispatch(addItem(item));
  };

  return (
    <div className="todo-container">
      <p className="title">My Todo</p>
      <AddItemForm onAdd={onAdd} />
      {items.length === 0 && (
        <p className="message">There are currently no todos</p>
      )}
      <div className="items">
        {items.map((item) => {
          return (
            <Item
              key={item.title}
              title={item.title}
              onRemove={() => dispatch(removeItem(item))}
            />
          );
        })}
      </div>
    </div>
  );
};
