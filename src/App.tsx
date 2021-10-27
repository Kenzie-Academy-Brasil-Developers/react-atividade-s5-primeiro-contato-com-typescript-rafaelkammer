import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  interface User {
    name: string;
    age: number;
    hobby: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const handleList = (name: string, age: number, hobby: string) => {
    const person = { name: name, age: age, hobby: hobby };
    setUsers([...users, person]);
    console.log(users);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          placeholder="Idade"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <Input
          placeholder="Hobby"
          onChange={(e) => {
            setHobby(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleList(name, age, hobby);
          }}
        >
          Enviar
        </button>
        {users.map(() => {
          return <Card key={name} age={age} hobby={hobby} name={name} />;
        })}
      </header>
    </div>
  );
}

export default App;
