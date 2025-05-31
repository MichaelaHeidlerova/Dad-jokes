//15. ÚKOL - https://github.com/MichaelaHeidlerova/Dad-jokes

//16. ÚKOL
import './style.css';
import { Joke } from "../../Components/Joke/Joke";
import { useState, useEffect } from 'react'

export const HomePage = () => {
const [jokes, setJokes] = useState([]);

  useEffect(() => {
      const getData = async () => {
        const response = await fetch('http://localhost:4000/api/jokes');
        const jsonData = await response.json();
        setJokes(jsonData.data)
      };
      getData();
    },
    []
  );

  return (
      <div className="container">
        {jokes.map(jokeData => (
          <Joke
            key={jokeData.id}
            userAvatar={jokeData.avatar}
            userName={jokeData.name}
            text={jokeData.text}
            likes={jokeData.likes}
            dislikes={jokeData.dislikes}
          />
        ))}
      </div>
  );
};
