import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', age: '' });

  const getData = async () => {
    try {
      const res = await axios.get(`https://nodejs-gikj.onrender.com/user/${params.id}`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://nodejs-gikj.onrender.com/user/${params.id}`, user);
      navigate('/');
    } catch (error) {
      console.error("Error updating user:", error.message);
      alert(`Error: ${error.response?.data?.Message || error.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}

export default Edit;
