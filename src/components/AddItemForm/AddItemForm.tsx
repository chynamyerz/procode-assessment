import { FC, useState } from 'react';
import './AddItemForm.css';
import { Item } from '../../store/todo/types';

interface AddItemFormProps {
  onAdd: (item: Item) => void;
}
export const AddItemForm: FC<AddItemFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onAddHandler = () => {
    if (!title && errorMessage) {
      return;
    } else if (!title) {
      setErrorMessage('You can not add an empty item.');
      return;
    }

    onAdd({ title });
    setTitle('');

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <>
      <div className="add-item-form-container">
        <div>
          <input
            type="text"
            placeholder="Add todo item"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <button onClick={onAddHandler}>Add</button>
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};
