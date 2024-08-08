// import { useState } from "react";
import React from "react";
import styles from "./jokes.module.css";
const Jokes = () => {
  const [jokes, setJokes] = React.useState("");
  const fetchJokes = async () => {
    try {
      const response = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );
      const res = await response.json();
      setJokes(res.Jokes);
    } catch (e) {
      console.error("unable to fetch data from Api", e.message);
    }
  };

  return (
    <div className={styles.jokes}>
      <div className={styles.joke}>
        <h1>Generate the Jokes using React Library</h1>
        <p>{jokes}</p>
        <button onClick={fetchJokes}>Click to Generate a Joke</button>
      </div>
    </div>
  );
};

export default Jokes;
