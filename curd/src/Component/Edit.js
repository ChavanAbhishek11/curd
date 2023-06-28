import React, { useState } from 'react';

const EditComponent = ({ data, onSave }) => {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        value={editedData.email}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

const App = () => {
  const initialData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (editedData) => {
    setData(editedData);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditComponent data={data} onSave={handleSave} />
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default App;
