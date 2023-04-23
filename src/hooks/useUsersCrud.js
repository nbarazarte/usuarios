import { useState } from "react";
import axios from "axios";

const useUserCrud = () => {
  const [users, setUsers] = useState();
  const [msjform, setMsjform] = useState();
  const url = "https://users-crud.academlo.tech/users/";

  //GET
  const getAllUsers = () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  //POST
  const createNewUser = (data) => {
    axios
      .post(url, data)
      .then((res) => {
        //console.log(res.data)
        setMsjform("El usuario ha sido creado con éxito");
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  //DELETE
  const deleteUserById = (id) => {
    const urlDelete = `${url}${id}/`;
    axios
      .delete(urlDelete)
      .then((res) => {
        setMsjform("El usuario ha sido eliminado");
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  //UPDATE
  const updateUserById = (id, data) => {
    const urlUpdate = `${url}${id}/`;
    axios
      .patch(urlUpdate, data)
      .then((res) => {
        //console.log(res.data)
        setMsjform("El usuario ha sido actualizado con éxito");
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById,
    msjform,
    setMsjform,
  };
};

export default useUserCrud;
