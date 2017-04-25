export const getAlbum = id =>
  fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json())

export const getAlbumTracks = () => {}
