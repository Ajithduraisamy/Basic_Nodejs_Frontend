import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      /* const userRes = await axios.get("http://localhost:3001/users"); */
      const userRes = await axios.get("https://nodejs-gikj.onrender.com/users");
      setUsers(userRes.data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching users:", err);
    }
  };

  const deleteData = async(id)=>{
    /* await axios.delete(`http://localhost:3001/user/${id}`); */
    await axios.delete(`https://nodejs-gikj.onrender.com/user/${id}`);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Link to={"/create"}>Create User</Link>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.age} - <Link to={`/edit/${user._id}`}>Edit</Link> <button onClick={()=>deleteData(user._id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default List;
