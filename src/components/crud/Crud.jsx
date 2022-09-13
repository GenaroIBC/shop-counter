import React, { useState, useEffect } from "react";
import { fetchRequest } from "../../assets/helpers/fetchRequest";
import { Card } from "./card/Card";
import { CrudForm } from "./crud-form/CrudForm";

import {
  createOne,
  deleteOne,
  getAllData,
  updateOne,
} from "../../redux/actions/crudActions";
import { useDispatch, useSelector } from "react-redux";

const URL = "http://localhost:5555/users";

export function Crud() {
  const { crudReducer } = useSelector(state => state);
  const crudDispatch = useDispatch();

  // const [usersData, setUsersData] = useState(null);
  const [dataToSend, setDataToSend] = useState(null);
  const [dataToEdit, setDataToEdit] = useState({});

  useEffect(() => {
    // GET
    const getData = async () => {
      const data = await fetchRequest({ url: URL });
      crudDispatch(getAllData(data));
    };
    getData();
  }, []);

  const handleChange = e => {
    const modifiedData = {
      [e.target.name]: e.target.value,
    };
    if (userIsEditing) {
      setDataToEdit(prevData => {
        return {
          ...prevData,
          ...modifiedData,
        };
      });
    } else {
      setDataToSend(prevData => {
        return {
          ...prevData,
          ...modifiedData,
        };
      });
    }
  };

  const handleSubmit = async () => {
    if (userIsEditing) {
      // PUT
      await fetchRequest({
        url: `${URL}/${dataToEdit.id}`,
        method: "PUT",
        body: JSON.stringify(dataToEdit),
      });

      // setUsersData(updatedData);
      crudDispatch(updateOne(dataToEdit));
      setDataToEdit({});
    } else {
      // POST
      const newData = await fetchRequest({
        url: URL,
        method: "POST",
        body: JSON.stringify(dataToSend),
      });

      // task: replace newData below with dataToSend and delete that constant
      // setUsersData(prevData => [...prevData, newData]);
      crudDispatch(createOne(newData));
    }
  };

  const handleDelete = async id => {
    // DELETE
    await fetchRequest({
      url: `${URL}/${id}`,
      method: "DELETE",
    });
    crudDispatch(deleteOne(id));
    // setUsersData(prevData => prevData.filter(el => el.id !== id));
  };

  const handleEdit = id => {
    setDataToEdit(crudReducer.users.find(el => el.id === id));
  };

  const userIsEditing = Object.keys(dataToEdit).length;

  return (
    <>
      <br />
      <h1 className="tac">CRUD with AJAX, JSON-SERVER and React</h1>
      <section>
        <h2 className="tac">
          <span>{userIsEditing ? "Edit" : "Create new"} </span>
          user
        </h2>
        <CrudForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={crudReducer.users}
        />
      </section>
      <br />
      <section className="users-data-container">
        {crudReducer.users
          ? crudReducer.users.map(({ age, id, name }) => (
              <Card
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={id}
                age={age}
                id={id}
                name={name}
              />
            ))
          : "cargando"}
      </section>
    </>
  );
}
