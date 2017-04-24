export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)


export const searchArtists = () => {}
export const searchAlbums = () => {}
export const searchTracks = () => {}
export const searchPlaylists = () => {}
