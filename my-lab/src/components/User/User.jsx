import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, removeUser, setError } from '../../redux/userslice';

const UserComponent = () => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({ id: '', name: '' });
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для порядка сортировки

  const handleAdd = () => {
    const userId = Number(newUser.id);
    if (userId && newUser.name) {
      dispatch(addUser({ id: userId, name: newUser.name }));
      setNewUser({ id: '', name: '' });
    } else {
      dispatch(setError('Invalid user'));
    }
  };

  const handleEdit = (user) => {
    setEditUserId(user.id);
    setEditName(user.name);
  };

  const handleSave = (id) => {
    dispatch(updateUser({ id, updates: { name: editName } }));
    setEditUserId(null);
  };

  const handleSort = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Фильтрация и сортировка пользователей
  const filteredAndSortedUsers = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div>
      <h2>Users</h2>
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
        value={newUser.id}
        onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <button onClick={handleAdd}>Add User</button>

      <ul>
        {filteredAndSortedUsers.map(user => (
          <li key={user.id}>
            {editUserId === user.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => handleSave(user.id)}>Save</button>
              </>
            ) : (
              <>
                {user.name}
                <button onClick={() => handleEdit(user)}>Edit</button>
              </>
            )}
            <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
