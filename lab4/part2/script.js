"use strict";

const albumCollection = [
  {
    id: 3113,
    title: "Untourable Album",
    artist: "Men I Trust",
    tracks: ["Tree Among Shrubs", "Serenade of Water"],
  },

  {
    id: 2214,
    title: "A.M.Paradox",
    artist: "Brent Faiyaz",
    tracks: ["No One Knows", "Poison"],
  },

  {
    id: 2125,
    title: "Use Your Illusion",
    artist: "Guns N' Roses",
    tracks: ["November Rain", "Don't Cry"],
  },

  {
    id: 1678,
    title: "A Night at the Opera",
    artist: "Queen",
    tracks: [],
  },

  {
    id: 2975,
    title: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },

  {
    id: 1458,
    title: "Appetite for Destruction",
    artist: "Guns N' Roses",
  },

  {
    id: 3590,
    title: "School's Out",
  },

  {
    id: 3257,
    title: "Space Oddity",
  },

  {
    id: 1257,
    title: "Transformer",
    artist: "Lou Reed",
    tracks: ["Vicious", "Perfect Day", "Walking on the Wild Side"],
  },
];

/**
 * Returns an array of titles of all the albums in albumCollection
 * @returns {array} - an array of titles of all the albums in albumCollection
 */
function getAllTitles() {
  return albumCollection.map((album) => album.title).filter((title) => title);
}
//uncomment following test code after implementing the function
// console.log(getAllTitles());

/**
 * Returns albums of the artist in albumCollection
 * @param {string} artist - name of an artist
 * @returns an array of albums of the specified artist in albumCollection
 */
function getAlbumsByArtist(artist) {
  return albumCollection.filter((album) => album.artist === artist);
}
//uncomment following test code after implementing the function
// console.log(getAlbumsByArtist("Queen"));
// console.log(getAlbumsByArtist("Guns N' Roses"));
// console.log(getAlbumsByArtist("ABBA"));

/**
 * Returns the ablum with the specified track
 * @param {string} track - name of a track
 * @returns an album object with the specified track
 */
function getAlbumWithTrack(track) {
  return (
    albumCollection.find(
      (album) => album.tracks && album.tracks.includes(track)
    ) || null
  );
}

//uncomment following test code after implementing the function
// console.log(getAlbumWithTrack("Little Red Corvette"));
// console.log(getAlbumWithTrack("November Rain"));
// console.log(getAlbumWithTrack("perfect day"));

/**
 * Updates the album with the specified id.
 * @param {*} id - id of an album
 * @param {*} prop - name of a property
 * @param {*} value - new value for the property
 */
function updateAlbum(id, prop, value) {
  const albumIndex = albumCollection.findIndex((album) => album.id === id);
  if (albumIndex !== -1) {
    const album = albumCollection[albumIndex];
    if (prop !== "tracks") {
      if (value !== "") {
        album[prop] = value;
      } else {
        delete album[prop];
      }
    } else {
      if (!album.hasOwnProperty("tracks")) {
        album.tracks = [];
      }
      if (value !== "") {
        album.tracks.push(value);
      }
    }
  }
}
//uncomment following test code after implementing the function
// updateAlbum(3590, "artist", "Alice Cooper");
// updateAlbum(3590, "tracks", "School's Out");
// updateAlbum(2125, "artist", "");
// updateAlbum(1678, "tracks", "Bohemian Rhapsody");
// updateAlbum(2975, "tracks", "Free");
// updateAlbum(1257, "tracks", "");
// updateAlbum(3257, "artist", "David Bowie");
// console.log(albumCollection);
