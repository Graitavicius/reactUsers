import { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uId, uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
