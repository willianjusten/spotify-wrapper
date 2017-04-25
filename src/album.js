export const getAlbum = id =>
  fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json())

export const getAlbums = ids =>
  fetch(`https://api.spotify.com/v1/albums/?ids=${ids}`)
    .then(data => data.json())

export const getAlbumTracks = id =>
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`)
    .then(data => data.json())
