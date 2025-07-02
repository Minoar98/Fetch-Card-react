import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Card from "./Card/Card";
import data from "./data.js";
import DarkModeToggle from "../DarkmodeToogle.jsx";

function App() {
  const [players, setPlayers] = useState(data);
  console.log(setPlayers);
  const clickHandler = (id) => {
    setPlayers((prevState) => {
      return prevState.map((player) =>
        player.id === id
          ? {
              ...player,
              isFavorite: !player.isFavorite,
            }
          : player
      );
    });
  };

  return (
    <main class="container">
      <h1 className="text-pink-500 font-bold text-center text-3xl">
        All Users Information
      </h1>
      <DarkModeToggle />
      <Button />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="users-grid">
        {players.map((player) => {
          return (
            <Card key={players.id} {...player} onClickhandler={clickHandler} />
          );
        })}
      </div>
    </main>
  );
}

export default App;
