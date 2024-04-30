import { FC } from 'react';
import './Item.css';
import { FaTrashAlt } from 'react-icons/fa';
import type { Item as TodoItem } from '../../store/todo/types';

interface ItemProps extends TodoItem {
  onRemove: () => void;
}

export const Item: FC<ItemProps> = ({ title, onRemove }) => {
  return (
    <div className="item-container">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <FaTrashAlt className="item-remove-icon" onClick={onRemove} />
      </div>
    </div>
  );
};
