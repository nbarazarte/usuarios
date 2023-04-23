import { useEffect, useState } from "react";
import "./App.css";
import useUserCrud from "./hooks/useUsersCrud";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById, msjform, setMsjform } =
    useUserCrud();

  const [updateInfo, setUpdateInfo] = useState();
  const [formclose, setFormclose] = useState(true)

  const MsjFormUser = () => (
    <div id="msjForm" className="form__msj">
      {msjform}
    </div>
  );

  useEffect(() => {

    if(msjform){
      setTimeout(() => {
        document.getElementById('msjForm').style.display = 'none'
        setMsjform()
      }, 3000); 
    }

  }, [msjform])

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () =>{
    setFormclose(false)
    setUpdateInfo()
  }

  return (
    <div className="app">

      <header className="app__header">
        <h1 className="app_title">Users</h1>
        {msjform && <MsjFormUser /> }
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
            setFormclose={setFormclose}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
