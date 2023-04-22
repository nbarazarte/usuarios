import { useEffect, useState } from "react";
import "./App.css";
import useUserCrud from "./hooks/useUsersCrud";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } =
    useUserCrud();

  const [updateInfo, setUpdateInfo] = useState();

  const [formclose, setFormclose] = useState(true)

  useEffect(() => {
    getAllUsers();
  }, []);


  const handleOpenForm = () =>{
    setFormclose(false)
  }

  return (
    <div className="app">

      <header className="app__header">
        <h1 className="app_title">Users</h1>
        <button onClick={handleOpenForm} className="app__btn">Create New User</button>
      </header>

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormclose={setFormclose}
        formclose={formclose}
      />

      <div className="app__user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
