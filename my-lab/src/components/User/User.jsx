import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, removeUser, setError } from '../../redux/userslice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

const UserComponent = () => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({ id: '', name: '' });
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [errorMessage, setErrorMessage] = useState(''); // Состояние для хранения сообщения об ошибке

  const handleAdd = () => {
    const userId = Number(newUser.id);
    
    // Проверка на уникальность ID
    if (!userId || !newUser.name) {
      dispatch(setError('Invalid user'));
      setErrorMessage('Please provide a valid ID and name.');
      return;
    }

    if (users.some(user => user.id === userId)) {
      setErrorMessage('User ID already exists.');
      return;
    }

    dispatch(addUser({ id: userId, name: newUser.name }));
    setNewUser({ id: '', name: '' });
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleEdit = (user) => {
    setEditUserId(user.id);
    setEditName(user.name);
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleSave = (id) => {
    if (!editName) {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    dispatch(updateUser({ id, updates: { name: editName } }));
    setEditUserId(null);
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleRemove = (userId) => {
    dispatch(removeUser(userId));
  };

  const handleSort = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

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
    <div className="container mt-5">
      <h2>Users</h2>

      {/* Отображение сообщения об ошибке */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={handleSort}>
          Sort {sortOrder === 'asc' ? '▲' : '▼'}
        </button>
      </div>
      
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add User</button>
      </div>

      <ul className="list-group">
        {filteredAndSortedUsers.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editUserId === user.id ? (
              <>
                <input
                  type="text"
                  className="form-control me-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button className="btn btn-success" onClick={() => handleSave(user.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{user.name}</span>
                <div>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleRemove(user.id)}>Remove</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
