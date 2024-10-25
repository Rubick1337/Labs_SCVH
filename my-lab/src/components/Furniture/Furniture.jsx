import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFurniture, updateFurniture, removeFurniture, setError } from '../../redux/furnitureSlice';

const FurnitureComponent = () => {
  const furniture = useSelector(state => state.furniture.items);
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({ id: '', name: '' });
  const [editItemId, setEditItemId] = useState(null);
  const [editName, setEditName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для порядка сортировки

  const handleAdd = () => {
    const itemId = Number(newItem.id);
    if (itemId && newItem.name) {
      dispatch(addFurniture({ id: itemId, name: newItem.name }));
      setNewItem({ id: '', name: '' });
    } else {
      dispatch(setError('Invalid item'));
    }
  };

  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditName(item.name);
  };

  const handleSave = (id) => {
    dispatch(updateFurniture({ id, updates: { name: editName } }));
    setEditItemId(null);
  };

  const handleSort = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Фильтрация и сортировка мебели
  const filteredAndSortedFurniture = furniture
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div>
      <h2>Furniture</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSort}>
        Sort {sortOrder === 'asc' ? '▲' : '▼'}
      </button>
      
      <input
        type="text"
        placeholder="ID"
        value={newItem.id}
        onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <button onClick={handleAdd}>Add Furniture</button>

      <ul>
        {filteredAndSortedFurniture.map(item => (
          <li key={item.id}>
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => handleSave(item.id)}>Save</button>
              </>
            ) : (
              <>
                {item.name}
                <button onClick={() => handleEdit(item)}>Edit</button>
              </>
            )}
            <button onClick={() => dispatch(removeFurniture(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FurnitureComponent;
