import { useState } from "react";
import PersonList from "./Componens/PersonList";
import ErrorModel from "./Componens/styled-compoent/ErrorModel";
import UserForm from "./Componens/UserForm";

function App() {
  const [person, setPerson] = useState([]);

  const formDataHandler = function (data) {
    setPerson((prev) => [data, ...prev]);
  };

  return (
    <div>
      <UserForm getDataOnSubmit={formDataHandler} />;
      <PersonList personData={person} />
    </div>
  );
}
export default App;
