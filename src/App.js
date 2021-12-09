import React from "react";
import "./styles.css";
import { useState } from "react";

const mySongs = {
  JavedAli: [
    {
      songName: "Saude Bazi",
      movie: "Aakrosh",
      rating: "5/5"
    },
    {
      songName: "Tum Tak",
      movie: "Raanjhanaa",
      rating: "5/5"
    },
    {
      songName: "Lab Par Aaye",
      movie: "Bandish Bandits",
      rating: "4/5"
    }
  ],
  SonuNigam: [
    {
      songName: "Main Hoon Na",
      movie: "Main Hoon Na",
      rating: "5/5"
    },
    {
      songName: "Abhi Mujh Mein Kahin",
      movie: "Agneepath",
      rating: "4/5"
    },
    {
      songName: "Kabhi Alvida Na Kehna",
      movie: "Kabhi Alvida Na Kehna",
      rating: "3/5"
    }
  ],
  MohitChauhan: [
    {
      songName: "Kun Faya Kun",
      movie: "Rockstar",
      rating: "5/5"
    },
    {
      songName: "Phir Se Udd Chala",
      movie: "Rockstar",
      rating: "4/5"
    },
    {
      songName: "Matargashti",
      movie: "Tamasha",
      rating: "3/5"
    }
  ]
};
let name = "Singer: ";
export default function App() {
  const [genre, setGenre] = useState("JavedAli");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎵</span> Music Recommendation App
      </h1>
      <h4>
        These are my some favorite songs of these singers.
      </h4>
      <div>
        {Object.keys(mySongs).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{ padding: "0.8rem", margin: "1rem" }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {mySongs[genre].map((song) => (
            <li key={song.songName}>
              {" "}
              <div style={{ fontSize: "larger" }}>{song.songName}</div>
              <div style={{ fontSize: "smaller" }}>
                {name}
                {song.movie}
              </div>
              <div style={{ fontSize: "smaller" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
