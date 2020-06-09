import React from "react";
import SongFormInput from "./SongFormInput";
import SongFormList from "./SongFormList";

class songOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          song: "Stone Cold Crazy",
          artist: "Queen",
          genre: "Rock",
          rating: "4"
        },
        {
          id: 2,
          song: "Tie Your Mother Down'",
          artist: "Queen",
          genre: "Rock",
          rating: "4"
        },
        {
          id: 3,
          song: "Killer Queen",
          artist: "Queen",
          genre: "Rock",
          rating: "4"
        },
        {
          id: 4,
          song: "Somebody to Love",
          artist: "Queen",
          genre: "Rock",
          rating: "5"
        },
        {
          id: 5,
          song: "Crazy Little Thing Called Love",
          artist: "Queen",
          genre: "Rock",
          rating: "4"
        },
          {
          id: 6,
          song: "All Together Now",
          artist: "Beatles",
          genre: "Pop",
          rating: "5"},
          {
            id: 7,
            song: "All You Need Is Love",
            artist: "Beatles",
            genre: "Pop",
            rating: "4"
          },
          {
            id: 7,
            song: "Come Together",
            artist: "Beatles",
            genre: "Pop",
            rating: "3"
          },
          
      ]
    };
  }

  render() {
    const addSong = song => {
      const item = {
        id: this.state.songs.length + 1,
        song: song.song,
        artist: song.artist,
        genre: song.genre,
        rating: song.rating
      };
      this.setState({ songs: this.state.songs.concat(item) });
    };
    const sortBySong = () => {
      const currentState = this.state.songs;
      this.setState(currentState.sort((a, b) => a.song.localeCompare(b.song)));
    };
    const sortByArtist = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((a, b) => a.artist.localeCompare(b.artist))
      );
    };
    const sortByGenre = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((a, b) => a.genre.localeCompare(b.genre))
      );
    };
    const sortByRating = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((b, a) => a.rating.localeCompare(b.rating))
      );
    };
    return (
      <div>
        <div>
          <SongFormInput addSong={addSong} />
        </div>
        <div>
          <table style={{ width: "100%" }} className="headerBar">
            <thead className="tableHead">
              <tr>
                <th className="song-row__item">
                  <button onClick={sortBySong}>Song</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByArtist}>Artist</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByGenre}>Genre</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByRating}>rating</button>
                </th>
              </tr>
            </thead>
            <SongFormList songList={this.state.songs} />
          </table>
        </div>
        {console.log("array lengt is: " + this.state.songs.length)}
        {console.log("array is: " + this.state.songs)}
        {console.log("add song: " + addSong)}
      </div>
    );
  }
}

export default songOverview;